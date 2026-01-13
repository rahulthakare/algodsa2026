/**
 * 100. Same Tree (Easy)
 * 
 * Given the roots of two binary trees p and q, write a function to check 
 * if they are the same or not.
 * 
 * Two binary trees are considered the same if they are structurally identical,
 * and the nodes have the same value.
 * 
 * Example 1:
 *     1       1
 *    / \     / \
 *   2   3   2   3
 *   Input: p = [1,2,3], q = [1,2,3]
 *   Output: true
 * 
 * Example 2:
 *     1       1
 *    /         \
 *   2           2
 *   Input: p = [1,2], q = [1,null,2]
 *   Output: false
 * 
 * Example 3:
 *     1       1
 *    / \     / \
 *   2   1   1   2
 *   Input: p = [1,2,1], q = [1,1,2]
 *   Output: false
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(h)
 */

import { TreeNode, createTree } from './tree-node';

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // Your solution here
    if(p === null && q === null) return true;

    if ((p === null && q!== null) || (p !== null && q === null)) return false;

    if (p?.val !==  q?.val) return false;

    return isSameTree(p?.left || null, q?.left || null) && isSameTree(p?.right || null, q?.right || null);
    
}

// Test cases
console.log("Test 1:", isSameTree(createTree([1,2,3]), createTree([1,2,3])));
// Expected: true

console.log("Test 2:", isSameTree(createTree([1,2]), createTree([1,null,2])));
// Expected: false

console.log("Test 3:", isSameTree(createTree([1,2,1]), createTree([1,1,2])));
// Expected: false

console.log("Test 4:", isSameTree(createTree([]), createTree([])));
// Expected: true

console.log("Test 5:", isSameTree(createTree([1]), createTree([1])));
// Expected: true

console.log("Test 6:", isSameTree(createTree([1,2,3,4,5]), createTree([1,2,3,4,5])));
// Expected: true

