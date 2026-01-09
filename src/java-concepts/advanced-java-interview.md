# Advanced Java Interview Questions

---

## 1. HashMap vs ConcurrentHashMap

### HashMap
- **NOT thread-safe** — if multiple threads modify it, you get unpredictable behavior
- Allows ONE null key and multiple null values
- Faster in single-threaded scenarios

### ConcurrentHashMap
- **Thread-safe** — uses segment-level locking (Java 7) or CAS + synchronized blocks (Java 8+)
- Does NOT allow null keys or values
- Slightly slower due to synchronization overhead

### When to NEVER use HashMap:
```java
// DANGEROUS: Multiple threads writing to HashMap
Map<String, Integer> map = new HashMap<>();

// Thread 1
map.put("a", 1);

// Thread 2 (simultaneously)
map.put("b", 2);

// Can cause: infinite loops, lost updates, corrupted data
```

### When to NEVER use ConcurrentHashMap:
```java
// WASTEFUL: Single-threaded application
// ConcurrentHashMap adds unnecessary overhead
Map<String, Integer> map = new ConcurrentHashMap<>(); // Overkill!

// Also: If you need null keys/values
map.put(null, 1); // Throws NullPointerException!
```

### Real-World Example:
```java
// Caching user sessions (multi-threaded web server)
ConcurrentHashMap<String, Session> sessions = new ConcurrentHashMap<>();

// Thread-safe operations
sessions.put(sessionId, session);
sessions.computeIfAbsent(userId, k -> createNewSession());
```

---

## 2. Why is String Immutable?

### Reasons:
1. **Security** — Strings used in class loading, network connections, file paths can't be changed
2. **Thread Safety** — Immutable objects are inherently thread-safe
3. **String Pool** — JVM can cache and reuse strings (saves memory)
4. **HashCode Caching** — Hash computed once, cached forever

### Performance Impact:

```java
// BAD: Creates many intermediate String objects
String result = "";
for (int i = 0; i < 10000; i++) {
    result = result + i;  // Creates NEW string each time!
}
// Memory: O(n²) — each concatenation copies everything

// GOOD: StringBuilder is mutable
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 10000; i++) {
    sb.append(i);  // Modifies in place
}
String result = sb.toString();
// Memory: O(n)
```

### String Pool Example:
```java
String s1 = "hello";  // Goes to String Pool
String s2 = "hello";  // Reuses from String Pool
String s3 = new String("hello");  // Creates new object on Heap

System.out.println(s1 == s2);  // true (same reference)
System.out.println(s1 == s3);  // false (different objects)
System.out.println(s1.equals(s3));  // true (same content)
```

---

## 3. What Happens When You Use `new`?

```java
Person p = new Person("John", 25);
```

### Step-by-Step in Memory:

1. **Class Loading** (if not already loaded)
   - JVM loads `Person.class` into Metaspace
   - Static variables initialized

2. **Memory Allocation**
   - JVM calculates object size (header + fields)
   - Allocates memory on the **Heap**
   - Object header: class pointer, GC info, locks

3. **Field Initialization**
   - All fields set to default values (0, null, false)

4. **Constructor Execution**
   - Instance initializers run
   - Constructor code executes
   - Fields assigned actual values

5. **Reference Assignment**
   - Reference `p` (on Stack) points to object (on Heap)

### Memory Layout:
```
STACK (Thread-local)          HEAP (Shared)
┌─────────────────┐           ┌─────────────────────────┐
│ p = 0x1234 ─────┼──────────→│ Person Object           │
│                 │           │ ┌─────────────────────┐ │
│                 │           │ │ Header (12-16 bytes)│ │
│                 │           │ │ name = "John" ──────┼─┼→ String Pool
│                 │           │ │ age = 25            │ │
└─────────────────┘           │ └─────────────────────┘ │
                              └─────────────────────────┘
```

---

## 4. Checked vs Unchecked Exceptions

### Checked Exceptions
- **Compiler forces** you to handle them
- Extend `Exception` (but not `RuntimeException`)
- Represent **recoverable** situations

```java
// Checked: Must handle or declare
public void readFile(String path) throws IOException {
    FileReader reader = new FileReader(path);  // May not exist
    // ...
}

// Calling code MUST handle:
try {
    readFile("config.txt");
} catch (IOException e) {
    // Recover: use default config
}
```

### Unchecked Exceptions
- **Compiler ignores** them
- Extend `RuntimeException`
- Represent **programming errors** (bugs)

```java
// Unchecked: Programming error
public int divide(int a, int b) {
    return a / b;  // ArithmeticException if b=0
}

// NullPointerException, ArrayIndexOutOfBoundsException, etc.
```

### When to Create Your Own:

```java
// Custom CHECKED exception: Recoverable business error
public class InsufficientFundsException extends Exception {
    private double deficit;
    
    public InsufficientFundsException(double deficit) {
        super("Insufficient funds. Need: " + deficit);
        this.deficit = deficit;
    }
}

// Custom UNCHECKED exception: Programming error / invalid state
public class InvalidOrderStateException extends RuntimeException {
    public InvalidOrderStateException(String message) {
        super(message);
    }
}
```

### Rule of Thumb:
- **Checked**: Caller can reasonably recover (file not found, network error)
- **Unchecked**: Bug in code that should be fixed (null pointer, invalid argument)

---

## 5. JVM Memory Model

```
┌─────────────────────────────────────────────────────────────┐
│                         JVM MEMORY                          │
├──────────────────┬──────────────────┬───────────────────────┤
│      HEAP        │     STACK        │      METASPACE        │
│  (Shared)        │  (Per Thread)    │    (Class data)       │
├──────────────────┼──────────────────┼───────────────────────┤
│ • Objects        │ • Method frames  │ • Class metadata      │
│ • Instance vars  │ • Local vars     │ • Static variables    │
│ • Arrays         │ • References     │ • Method bytecode     │
│                  │ • Primitives     │ • Constant pool       │
├──────────────────┼──────────────────┼───────────────────────┤
│ GC managed       │ Auto cleanup     │ GC managed (Java 8+)  │
│                  │ (method returns) │                       │
└──────────────────┴──────────────────┴───────────────────────┘
```

### HEAP
```java
Person p = new Person();  // Object lives on Heap
int[] arr = new int[100]; // Array lives on Heap
```
- **Young Generation**: New objects (Eden + Survivor spaces)
- **Old Generation**: Long-lived objects
- **Garbage Collected**

### STACK
```java
public void calculate() {
    int x = 10;           // Primitive on Stack
    double y = 3.14;      // Primitive on Stack
    Person p = new Person(); // Reference on Stack, object on Heap
}
// When method returns, x, y, p (reference) are popped
```
- Each thread has its own Stack
- LIFO structure
- Fixed size (StackOverflowError if exceeded)

### METASPACE (replaced PermGen in Java 8)
```java
public class MyClass {
    static int counter = 0;  // Lives in Metaspace
    
    public void doSomething() { }  // Method bytecode in Metaspace
}
```
- Uses native memory (not limited by -Xmx)
- Grows automatically (can limit with -XX:MaxMetaspaceSize)

---

## 6. Garbage Collection

### What Problem Does It Solve?
- **Manual memory management is error-prone**:
  - Memory leaks (forget to free)
  - Dangling pointers (use after free)
  - Double free (crash)

### How It Works:
```java
public void process() {
    Person p1 = new Person("A");  // Object created
    Person p2 = new Person("B");  // Another object
    
    p1 = null;  // Object "A" now unreachable → eligible for GC
    
    // Method ends → p2 reference gone → Object "B" eligible for GC
}
```

### When GC "Fails" (Memory Leaks in Java):

```java
// 1. Forgotten references in collections
static List<Object> cache = new ArrayList<>();
public void process(Object data) {
    cache.add(data);  // Never removed → grows forever!
}

// 2. Unclosed resources
public void readFile() {
    InputStream is = new FileInputStream("file.txt");
    // Forgot to close → resource leak
}
// Fix: try-with-resources
try (InputStream is = new FileInputStream("file.txt")) {
    // Auto-closed
}

// 3. Inner class holding outer reference
public class Outer {
    byte[] largeData = new byte[10_000_000];
    
    public Runnable getTask() {
        return new Runnable() {  // Holds reference to Outer
            public void run() { }
        };
    }
}
// Fix: Use static inner class or lambda
```

### GC Types:
- **Serial GC**: Single-threaded, small apps
- **Parallel GC**: Multi-threaded, throughput focus
- **G1 GC**: Balanced, large heaps (default in Java 9+)
- **ZGC/Shenandoah**: Low latency, very large heaps

---

## 7. Composition Over Inheritance

### The Problem with Inheritance:

```java
// Fragile Base Class Problem
class CustomList extends ArrayList<String> {
    private int addCount = 0;
    
    @Override
    public boolean add(String e) {
        addCount++;
        return super.add(e);
    }
    
    @Override
    public boolean addAll(Collection<? extends String> c) {
        addCount += c.size();
        return super.addAll(c);  // PROBLEM: ArrayList.addAll calls add()!
    }
    
    public int getAddCount() { return addCount; }
}

// Usage
CustomList list = new CustomList();
list.addAll(Arrays.asList("a", "b", "c"));
System.out.println(list.getAddCount());  // Expected: 3, Actual: 6!
```

### Composition Solution:

```java
class CustomList {
    private final List<String> list = new ArrayList<>();  // HAS-A
    private int addCount = 0;
    
    public boolean add(String e) {
        addCount++;
        return list.add(e);
    }
    
    public boolean addAll(Collection<? extends String> c) {
        addCount += c.size();
        return list.addAll(c);  // No double-counting!
    }
    
    public int getAddCount() { return addCount; }
    
    // Delegate other methods as needed
    public int size() { return list.size(); }
}
```

### When to Use What:

| Use Inheritance | Use Composition |
|-----------------|-----------------|
| True "is-a" relationship | "Has-a" relationship |
| Dog IS-A Animal | Car HAS-A Engine |
| Need polymorphism | Need flexibility |
| Framework requires it | Avoid tight coupling |

---

## 8. synchronized vs volatile vs Atomic

### volatile
- **Visibility guarantee** — changes visible to all threads
- **No atomicity** for compound operations
- Cheapest synchronization

```java
volatile boolean running = true;

// Thread 1
while (running) {
    // do work
}

// Thread 2
running = false;  // Thread 1 sees this immediately
```

**When volatile FAILS:**
```java
volatile int counter = 0;

// Thread 1 & 2 simultaneously
counter++;  // NOT atomic! Read-modify-write

// counter++ is actually:
// 1. Read counter (volatile read)
// 2. Add 1
// 3. Write counter (volatile write)
// Race condition between steps!
```

### synchronized
- **Mutual exclusion** — only one thread at a time
- **Visibility + atomicity**
- More expensive (lock acquisition)

```java
private int counter = 0;

public synchronized void increment() {
    counter++;  // Safe: only one thread can execute
}

// Or synchronized block for finer control
public void process() {
    synchronized(this) {
        counter++;
    }
}
```

### Atomic Classes
- **Lock-free** atomicity using CAS (Compare-And-Swap)
- Better performance than synchronized for simple operations

```java
AtomicInteger counter = new AtomicInteger(0);

// Thread-safe increment
counter.incrementAndGet();  // Atomic!

// Compare-and-swap
counter.compareAndSet(5, 10);  // If current is 5, set to 10

// Atomic update with function
counter.updateAndGet(x -> x * 2);
```

### Comparison:

| Feature | volatile | synchronized | Atomic |
|---------|----------|--------------|--------|
| Visibility | ✅ | ✅ | ✅ |
| Atomicity | ❌ | ✅ | ✅ (single var) |
| Blocking | ❌ | ✅ | ❌ |
| Performance | Fast | Slow | Medium |
| Use Case | Flags | Critical sections | Counters |

---

## 9. Java Platform Independence

### How It Works:

```
                    ┌─────────────────┐
  Hello.java   ──→  │  javac          │  ──→  Hello.class (Bytecode)
                    │  (Compiler)     │
                    └─────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ↓                   ↓                   ↓
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│ Windows JVM   │   │  Linux JVM    │   │  macOS JVM    │
│               │   │               │   │               │
│ Interprets/   │   │ Interprets/   │   │ Interprets/   │
│ JIT compiles  │   │ JIT compiles  │   │ JIT compiles  │
│ bytecode      │   │ bytecode      │   │ bytecode      │
└───────────────┘   └───────────────┘   └───────────────┘
        ↓                   ↓                   ↓
   Native code         Native code         Native code
   for Windows         for Linux           for macOS
```

### Key Components:

1. **Bytecode**: Platform-independent intermediate representation
2. **JVM**: Platform-specific interpreter/compiler
3. **JIT (Just-In-Time)**: Compiles hot code to native at runtime

### "Write Once, Run Anywhere" (WORA)

```java
// This code runs on ANY platform with a JVM
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### Limitations:
- Need JVM installed on target platform
- Native libraries (JNI) break portability
- GUI looks different across platforms
- File paths differ (use `File.separator`)

---

## 10. Stream API vs Traditional Loops

### When to Use Streams:

```java
List<Person> people = getPersons();

// GOOD: Declarative, readable pipeline
List<String> adultNames = people.stream()
    .filter(p -> p.getAge() >= 18)
    .map(Person::getName)
    .sorted()
    .collect(Collectors.toList());

// Parallel processing (free parallelism!)
long count = people.parallelStream()
    .filter(p -> p.getSalary() > 50000)
    .count();
```

### When to Use Traditional Loops:

```java
// 1. Need to modify elements in place
for (int i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;  // Streams are for immutable ops
}

// 2. Need to break early
for (Person p : people) {
    if (p.getName().equals("John")) {
        return p;  // Early exit
    }
}
// Stream alternative: findFirst() works, but less clear

// 3. Need index access
for (int i = 0; i < list.size(); i++) {
    System.out.println(i + ": " + list.get(i));
}

// 4. Need to throw checked exceptions
for (String filename : files) {
    processFile(filename);  // throws IOException — easy to handle
}
// Streams + checked exceptions = ugly workarounds

// 5. Performance-critical tight loops
// Streams have overhead (object creation, method calls)
int sum = 0;
for (int i = 0; i < array.length; i++) {
    sum += array[i];  // Fastest possible
}
```

### Comparison:

| Aspect | Stream API | Traditional Loop |
|--------|------------|------------------|
| Readability | Better for pipelines | Better for simple ops |
| Parallelism | Easy (parallelStream) | Manual (complex) |
| Debugging | Harder | Easier |
| Performance | Slight overhead | Fastest |
| Early exit | findFirst/anyMatch | break statement |
| Mutation | Discouraged | Natural |
| Exceptions | Painful | Natural |

### Real-World Decision:

```java
// Stream: Complex data transformation
Map<Department, Double> avgSalaryByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.averagingDouble(Employee::getSalary)
    ));

// Loop: Simple iteration with side effects
for (Order order : orders) {
    sendConfirmationEmail(order);  // Side effect
    updateInventory(order);        // Side effect
}
```

---

## Quick Reference Card

| Concept | Key Takeaway |
|---------|--------------|
| HashMap vs ConcurrentHashMap | Thread safety vs performance |
| String Immutability | Security, caching, thread-safety |
| `new` keyword | Heap allocation, constructor chain |
| Checked vs Unchecked | Recoverable vs programming error |
| JVM Memory | Heap (objects), Stack (locals), Metaspace (classes) |
| GC | Automatic cleanup, but watch for leaks |
| Composition vs Inheritance | Favor composition for flexibility |
| synchronized/volatile/Atomic | Visibility vs atomicity vs lock-free |
| Platform Independence | Bytecode + JVM = WORA |
| Streams vs Loops | Declarative vs imperative |

---

*Good luck with your interview!* 🎯

