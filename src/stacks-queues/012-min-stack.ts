import {Stack} from './stack';
/**
 * 155. Min Stack (Medium)
 * 
 * Design a stack that supports push, pop, top, and retrieving the minimum
 * element in constant time O(1).
 * 
 * Implement the MinStack class:
 * - MinStack() initializes the stack object
 * - push(val) pushes the element val onto the stack
 * - pop() removes the element on the top of the stack
 * - top() gets the top element of the stack
 * - getMin() retrieves the minimum element in the stack
 * 
 * All operations must be O(1) time complexity!
 * 
 * Example:
 * const minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin(); // return -3
 * minStack.pop();
 * minStack.top();    // return 0
 * minStack.getMin(); // return -2
 * 
 * Constraints:
 * - Methods pop, top and getMin will always be called on non-empty stacks.
 */

class MinStack {
    // Your solution here
    private stack = new Stack<number>();
    private minStack = new Stack<number>();

    constructor() {
        
    }
    
    push(val: number): void {
        if (this.stack.peek() === undefined) {
            this.stack.push(val);
            this.minStack.push(val);
        } else {
            this.stack.push(val);
            if (val <= this.minStack.peek()) {
                this.minStack.push(val);
            }
        }
    }
    
    pop(): void {
        const val = this.stack.pop();
        if (val === this.minStack.peek()) {
                this.minStack.pop();
        }
    }
    
    top(): number {
        return this.stack.peek();
    }
    
    getMin(): number {
        return this.minStack.peek();
    }
}

// Test cases
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log("Test 1 - getMin():", minStack.getMin()); // Expected: -3
minStack.pop();
console.log("Test 2 - top():", minStack.top());       // Expected: 0
console.log("Test 3 - getMin():", minStack.getMin()); // Expected: -2

// Test 4: More operations
const minStack2 = new MinStack();
minStack2.push(5);
minStack2.push(3);
minStack2.push(7);
console.log("Test 4 - getMin():", minStack2.getMin()); // Expected: 3
minStack2.pop(); // removes 7
console.log("Test 5 - getMin():", minStack2.getMin()); // Expected: 3
minStack2.pop(); // removes 3
console.log("Test 6 - getMin():", minStack2.getMin()); // Expected: 5

// Test 7: Duplicate minimums
const minStack3 = new MinStack();
minStack3.push(2);
minStack3.push(2);
minStack3.push(1);
minStack3.push(1);
console.log("Test 7 - getMin():", minStack3.getMin()); // Expected: 1
minStack3.pop();
console.log("Test 8 - getMin():", minStack3.getMin()); // Expected: 1
minStack3.pop();
console.log("Test 9 - getMin():", minStack3.getMin()); // Expected: 2

