/**
 * 19. Remove Nth Node From End of List (Medium)
 * 
 * Given the head of a linked list, remove the nth node from the END
 * of the list and return its head.
 * 
 * Example 1:
 *   1 → 2 → 3 → 4 → 5,  n = 2
 *   Result: 1 → 2 → 3 → 5
 *   (Removed 4, which is 2nd from the end)
 * 
 * Example 2:
 *   Input: head = [1], n = 1
 *   Output: []
 *   (Remove the only node)
 * 
 * Example 3:
 *   Input: head = [1,2], n = 1
 *   Output: [1]
 *   (Remove the last node)
 * 
 * Constraints:
 * - The number of nodes is sz
 * - 1 <= sz <= 30
 * - 0 <= Node.val <= 100
 * - 1 <= n <= sz
 * 
 * Follow up: Can you do this in ONE PASS?
 * 
 * Hint: Use two pointers with a gap of n between them.
 *       When the fast pointer reaches the end, the slow pointer
 *       is right before the node to remove!
 * 
 * Time Complexity Goal: O(n) - single pass
 * Space Complexity Goal: O(1)
 */

import { ListNode, createList, listToArray } from './linked-list';

function removeNthFromEnd(head: ListNode<number> | null, n: number): ListNode<number> | null {
    // Your solution here

    if (head === null) return null;

    let current = head;
    let slow: ListNode<number> | null = current;
    let fast: ListNode<number> | null = current;

    for (let i=0; i<n; i++) {
        fast = fast?.next as ListNode<number>;
    }
    
    while (fast?.next && fast.next !== null) {
        slow = slow?.next as ListNode<number>;
        fast = fast?.next as ListNode<number>;   
    }
    if (fast === null) return head?.next as ListNode<number>;
    slow.next = slow.next?.next as ListNode<number>;
    
    
    return head;
}

// Test cases
console.log("Test 1:", listToArray(removeNthFromEnd(createList([1,2,3,4,5]), 2)));
// Expected: [1,2,3,5] (removed 4, 2nd from end)

console.log("Test 2:", listToArray(removeNthFromEnd(createList([1]), 1)));
// Expected: [] (removed the only node)

console.log("Test 3:", listToArray(removeNthFromEnd(createList([1,2]), 1)));
// Expected: [1] (removed 2, last node)

console.log("Test 4:", listToArray(removeNthFromEnd(createList([1,2]), 2)));
// Expected: [2] (removed 1, the head)

console.log("Test 5:", listToArray(removeNthFromEnd(createList([1,2,3,4,5]), 5)));
// Expected: [2,3,4,5] (removed 1, the head)

console.log("Test 6:", listToArray(removeNthFromEnd(createList([1,2,3,4,5]), 1)));
// Expected: [1,2,3,4] (removed 5, last node)

