/**
 * 143. Reorder List (Medium)
 * 
 * You are given the head of a singly linked list:
 *   L0 → L1 → … → Ln-1 → Ln
 * 
 * Reorder it to:
 *   L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
 * 
 * You may not modify the values in the list's nodes.
 * Only nodes themselves may be changed.
 * 
 * Example 1:
 *   Input:  1 → 2 → 3 → 4
 *   Output: 1 → 4 → 2 → 3
 * 
 * Example 2:
 *   Input:  1 → 2 → 3 → 4 → 5
 *   Output: 1 → 5 → 2 → 4 → 3
 * 
 * Constraints:
 * - The number of nodes is in the range [1, 5 * 10^4]
 * - 1 <= Node.val <= 1000
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1)
 */

import { ListNode, createList, listToArray } from './linked-list';

function reorderList(head: ListNode<number> | null): void {
    // Modify the list in-place, no return value
    if (head == null) return;

    let slow: ListNode<number> | null = head;
    let fast: ListNode<number> | null = head;
    let currentAlt = head;

    while (fast !== null && fast?.next !== null) {
        slow = slow?.next as ListNode<number>;
        fast = fast?.next.next as ListNode<number>
    }

    // Reverse the second half;
    
    let secondHalf:  ListNode<number> | null =   slow!.next as  ListNode<number>;
    let prev :  ListNode<number> | null = null;
    slow.next = null
    while(secondHalf !== null) {
        const next: ListNode<number> | null = secondHalf?.next;
        secondHalf.next = prev as  ListNode<number>
        prev = secondHalf;
        secondHalf = next;

    }

    // Alternate using currentAlt and prev;

    while(prev !== null) {
        const currNext: ListNode<number> | null = currentAlt?.next as ListNode<number>;
        const prevNext: ListNode<number> | null = prev?.next as ListNode<number>;
        
        currentAlt.next = prev;

        prev.next = currNext
        
        prev = prevNext;
        currentAlt = currNext;
    }

}



// Test cases
const list1 = createList([1,2,3,4]);
reorderList(list1);
console.log("Test 1:", listToArray(list1));
// Expected: [1,4,2,3]

const list2 = createList([1,2,3,4,5]);
reorderList(list2);
console.log("Test 2:", listToArray(list2));
// Expected: [1,5,2,4,3]

const list3 = createList([1]);
reorderList(list3);
console.log("Test 3:", listToArray(list3));
// Expected: [1]

const list4 = createList([1,2]);
reorderList(list4);
console.log("Test 4:", listToArray(list4));
// Expected: [1,2]

const list5 = createList([1,2,3]);
reorderList(list5);
console.log("Test 5:", listToArray(list5));
// Expected: [1,3,2]

const list6 = createList([1,2,3,4,5,6]);
reorderList(list6);
console.log("Test 6:", listToArray(list6));
// Expected: [1,6,2,5,3,4]

