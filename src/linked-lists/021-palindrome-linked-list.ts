/**
 * 234. Palindrome Linked List (Easy)
 * 
 * Given the head of a singly linked list, return true if it is a palindrome
 * or false otherwise.
 * 
 * Example 1:
 *   1 → 2 → 2 → 1
 *   Output: true
 * 
 * Example 2:
 *   1 → 2
 *   Output: false
 * 
 * Constraints:
 * - The number of nodes is in the range [1, 10^5]
 * - 0 <= Node.val <= 9
 * 
 * Follow up: Can you do it in O(n) time and O(1) space?
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1)
 */

import { ListNode, createList } from './linked-list';

function isPalindrome(head: ListNode<number> | null): boolean {
    // Your solution here
    let slow:ListNode<number> | null = head;
    let fast: ListNode<number> | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow?.next as ListNode<number>;
        fast = fast.next.next
    }
    // if fast == null , its a even list and slow is one step ahead.
    // Now reverse a list from head to slow.

    let current: ListNode<number> | null = head;
    let prev: ListNode<number> | null = null;

    while(current !== null && current !== slow) {
        const next = current?.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    // Lets start check for LL now;

    current = prev as ListNode<number>;
    if (fast !== null) {
        slow = slow?.next as ListNode<number>;
    }

    while (slow !== null && current !== null) {
        if (slow.val !== current?.val) {
            return false;
        }
        current = current.next;
        slow = slow?.next as ListNode<number>;
    }


    return true;

}

// Test cases
console.log("Test 1:", isPalindrome(createList([1,2,2,1])));
// Expected: true

console.log("Test 2:", isPalindrome(createList([1,2])));
// Expected: false

console.log("Test 3:", isPalindrome(createList([1])));
// Expected: true

console.log("Test 4:", isPalindrome(createList([1,2,3,2,1])));
// Expected: true (odd length)

console.log("Test 5:", isPalindrome(createList([1,2,3,4,5])));
// Expected: false

console.log("Test 6:", isPalindrome(createList([1,1,1,1])));
// Expected: true

console.log("Test 7:", isPalindrome(createList([1,2,1])));
// Expected: true

