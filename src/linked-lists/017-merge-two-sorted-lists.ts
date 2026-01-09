/**
 * 21. Merge Two Sorted Lists (Easy)
 * 
 * You are given the heads of two sorted linked lists list1 and list2.
 * 
 * Merge the two lists into one sorted list. The list should be made by
 * splicing together the nodes of the first two lists.
 * 
 * Return the head of the merged linked list.
 * 
 * Example 1:
 *   1 → 2 → 4
 *   1 → 3 → 4
 *   Result: 1 → 1 → 2 → 3 → 4 → 4
 * 
 * Example 2:
 *   Input: list1 = [], list2 = []
 *   Output: []
 * 
 * Example 3:
 *   Input: list1 = [], list2 = [0]
 *   Output: [0]
 * 
 * Constraints:
 * - The number of nodes in both lists is in the range [0, 50]
 * - -100 <= Node.val <= 100
 * - Both list1 and list2 are sorted in non-decreasing order
 * 
 * Hint: Use a "dummy" node to simplify edge cases. Compare values and
 *       link the smaller one to your result.
 * 
 * Time Complexity Goal: O(n + m)
 * Space Complexity Goal: O(1) for iterative, O(n + m) for recursive
 */

import { ListNode, createList, listToArray } from './linked-list';

// ============ ITERATIVE SOLUTION ============
function mergeTwoListsIterative(
    list1: ListNode<number> | null,
    list2: ListNode<number> | null
): ListNode<number> | null {
    // Your solution here
    let newHead: ListNode<number> | null = null;
    let newCurrent:  ListNode<number> | null = null;
    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    }

    if(list1.val<=list2.val) {
        newHead = list1;
        list1 = list1.next;
    } else {
        newHead = list2;
        list2 = list2.next;
    }
    newCurrent = newHead;
    while (list1 !== null && list2 !== null) {
        if(list1.val<=list2.val) {
            newCurrent.next = list1;
            list1 = list1.next;
        } else {
            newCurrent.next = list2;
            list2 = list2.next;
        }
        newCurrent = newCurrent?.next;
    }
    newCurrent.next = list1 === null ? list2 : list1;
    
    return newHead;
}

// ============ RECURSIVE SOLUTION (Bonus) ============
function mergeTwoListsRecursive(
    list1: ListNode<number> | null,
    list2: ListNode<number> | null
): ListNode<number> | null {
    // Your solution here (optional)
    if (list1 === null ) return list2;
    if (list2 === null ) return list1;

    if (list1.val <= list2.val) {
        list1.next = mergeTwoListsRecursive(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoListsRecursive(list1, list2.next);
        return list2;
    }
}

// Test cases
console.log("=== Iterative ===");
console.log("Test 1:", listToArray(mergeTwoListsIterative(
    createList([1,2,4]),
    createList([1,3,4])
)));
// Expected: [1,1,2,3,4,4]

console.log("Test 2:", listToArray(mergeTwoListsIterative(
    createList([]),
    createList([])
)));
// Expected: []

console.log("Test 3:", listToArray(mergeTwoListsIterative(
    createList([]),
    createList([0])
)));
// Expected: [0]

console.log("Test 4:", listToArray(mergeTwoListsIterative(
    createList([1,3,5,7]),
    createList([2,4,6,8])
)));
// Expected: [1,2,3,4,5,6,7,8]

console.log("Test 5:", listToArray(mergeTwoListsIterative(
    createList([1,2,3]),
    createList([4,5,6])
)));
// Expected: [1,2,3,4,5,6] (no interleaving needed)

console.log("\n=== Recursive ===");
console.log("Test 1:", listToArray(mergeTwoListsRecursive(
    createList([1,2,4]),
    createList([1,3,4])
)));
// Expected: [1,1,2,3,4,4]

