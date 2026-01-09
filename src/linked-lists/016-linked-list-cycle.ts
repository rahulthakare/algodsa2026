/**
 * 141. Linked List Cycle (Easy)
 * 
 * Given head, the head of a linked list, determine if the linked list has a cycle.
 * 
 * A cycle exists if some node in the list can be reached again by continuously
 * following the next pointer. Internally, pos is used to denote the index of the
 * node that tail's next pointer is connected to. Note that pos is not passed
 * as a parameter.
 * 
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 * 
 * Example 1:
 *   3 → 2 → 0 → -4
 *       ↑       ↓
 *       └───────┘
 * Input: head = [3,2,0,-4], pos = 1 (tail connects to node index 1)
 * Output: true
 * 
 * Example 2:
 *   1 → 2
 *   ↑   ↓
 *   └───┘
 * Input: head = [1,2], pos = 0 (tail connects to node index 0)
 * Output: true
 * 
 * Example 3:
 *   1 → null
 * Input: head = [1], pos = -1 (no cycle)
 * Output: false
 * 
 * Constraints:
 * - The number of nodes is in the range [0, 10^4]
 * - Node values are in the range [-10^5, 10^5]
 * - pos is -1 or a valid index in the linked list
 * 
 * Follow up: Can you solve it using O(1) memory?
 * 
 * Hint: Use the "Floyd's Tortoise and Hare" algorithm.
 *       - Slow pointer moves 1 step at a time
 *       - Fast pointer moves 2 steps at a time
 *       - If there's a cycle, they WILL meet!
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1)
 */

import { ListNode } from './linked-list';

// Helper function to create a linked list WITH a cycle
function createListWithCycle<T>(arr: T[], pos: number): ListNode<T> | null {
    if (arr.length === 0) return null;
    
    const head = new ListNode(arr[0], null);
    let current = head;
    let cycleNode: ListNode<T> | null = null;
    
    if (pos === 0) cycleNode = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i], null);
        current = current.next;
        if (i === pos) cycleNode = current;
    }
    
    // Create the cycle by connecting tail to the node at position 'pos'
    if (pos >= 0 && cycleNode) {
        current.next = cycleNode;
    }
    
    return head;
}

function hasCycle<T>(head: ListNode<T> | null): boolean {
    if (head === null) return false;
    
    let slow: ListNode<T> | null = head;
    let fast: ListNode<T> | null = head;

    // Loop while fast can move 2 steps
    while (fast !== null && fast.next !== null) {
        slow = slow!.next;           // Move slow 1 step
        fast = fast.next.next;       // Move fast 2 steps
        
        if (slow === fast) {         // They met! Cycle exists
            return true;
        }
    }
    
    // Fast reached the end, no cycle
    return false;
}

// Test cases
console.log("Test 1:", hasCycle(createListWithCycle([3,2,0,-4], 1)));
// Expected: true (cycle at index 1)

console.log("Test 2:", hasCycle(createListWithCycle([1,2], 0)));
// Expected: true (cycle at index 0)

console.log("Test 3:", hasCycle(createListWithCycle([1], -1)));
// Expected: false (no cycle)

console.log("Test 4:", hasCycle(createListWithCycle([], -1)));
// Expected: false (empty list)

console.log("Test 5:", hasCycle(createListWithCycle([1,2,3,4,5], -1)));
// Expected: false (no cycle, normal list)

console.log("Test 6:", hasCycle(createListWithCycle([1,2,3,4,5], 2)));
// Expected: true (cycle at index 2, node with value 3)

