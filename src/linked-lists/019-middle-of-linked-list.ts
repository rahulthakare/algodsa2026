/**
 * 876. Middle of the Linked List (Easy)
 * 
 * Given the head of a singly linked list, return the middle node.
 * If there are two middle nodes, return the second middle node.
 * 
 * Example 1:
 *   1 → 2 → 3 → 4 → 5
 *   Output: Node with value 3
 *   (The middle is node 3)
 * 
 * Example 2:
 *   1 → 2 → 3 → 4 → 5 → 6
 *   Output: Node with value 4
 *   (Two middle nodes 3 and 4, return the second one)
 * 
 * Constraints:
 * - The number of nodes is in the range [1, 100]
 * - 1 <= Node.val <= 100
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1)
 */

import { ListNode, createList, listToArray } from './linked-list';

function middleNode(head: ListNode<number> | null): ListNode<number> | null {


    let slow:ListNode<number> | null = head;
    let fast: ListNode<number> | null = head;

    if (slow === null) return null;

    while(fast?.next !== null && fast?.next.next !== null) {
        slow = slow?.next as  ListNode<number>;
        fast = fast?.next.next as  ListNode<number>;
    }

    return fast.next !== null ? slow.next: slow;
    
}

// Test cases
console.log("Test 1:", listToArray(middleNode(createList([1,2,3,4,5]))));
// Expected: [3,4,5] (middle is 3)

console.log("Test 2:", listToArray(middleNode(createList([1,2,3,4,5,6]))));
// Expected: [4,5,6] (two middles, return second one which is 4)

console.log("Test 3:", listToArray(middleNode(createList([1]))));
// Expected: [1] (single node is the middle)

console.log("Test 4:", listToArray(middleNode(createList([1,2]))));
// Expected: [2] (two nodes, return second middle)

console.log("Test 5:", listToArray(middleNode(createList([1,2,3]))));
// Expected: [2,3] (middle is 2)

