/**
 * 206. Reverse Linked List (Easy)
 * 
 * Given the head of a singly linked list, reverse the list,
 * and return the reversed list.
 * 
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 * 
 * Example 2:
 * Input: head = [1,2]
 * Output: [2,1]
 * 
 * Example 3:
 * Input: head = []
 * Output: []
 * 
 * Constraints:
 * - The number of nodes in the list is in the range [0, 5000]
 * - -5000 <= Node.val <= 5000
 * 
 * Follow up: Can you solve it both iteratively AND recursively?
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1) for iterative, O(n) for recursive
 */

// Definition for singly-linked list node
import { Cipher } from 'crypto';
import { ListNode, createList, listToArray} from './linked-list';

// ============ ITERATIVE SOLUTION ============
function reverseListIterative<T>(head: ListNode<T> | null): ListNode<T> | null  {
    // Your solution here
    let current: ListNode<T> | null = head;
    let prev:  ListNode<T> | null = null;
    

    while(current !== null) {
        const next: ListNode<T> | null = current.next;
        current.next = prev;
        prev = current;
        current = next;

    }
    
    return prev!;  // prev is the new head after reversing
}

// ============ RECURSIVE SOLUTION ============
export function reverseListRecursive<T>(head: ListNode<T> | null): ListNode<T> | null {
    // Base case
    if (head === null || head.next === null) {
        return head;
    }

    const newHead = reverseListRecursive(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
}

// Test cases
console.log("=== Iterative ===");

reverseListIterative<number>(createList<number>([1,2,3,4,5]))
console.log("Test 1:", listToArray<number>(reverseListIterative<number>(createList<number>([1,2,3,4,5]))));
// Expected: [5,4,3,2,1]

console.log("Test 2:", listToArray(reverseListIterative(createList([1,2]))));
// Expected: [2,1]

console.log("Test 3:", listToArray(reverseListIterative(createList([]))));
// Expected: []

console.log("Test 4:", listToArray(reverseListIterative(createList([1]))));
// Expected: [1]

console.log("\n=== Recursive ===");
console.log("Test 1:", listToArray(reverseListRecursive(createList([1,2,3,4,5]))));
// Expected: [5,4,3,2,1]

console.log("Test 2:", listToArray(reverseListRecursive(createList([1,2]))));
// Expected: [2,1]

console.log("Test 3:", listToArray(reverseListRecursive(createList([]))));
// Expected: []

console.log("Test 4:", listToArray(reverseListRecursive(createList([1]))));
// Expected: [1]

