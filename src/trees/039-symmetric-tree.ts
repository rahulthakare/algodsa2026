/**
 * 101. Symmetric Tree (Easy)
 * 
 * Given the root of a binary tree, check whether it is a mirror of itself
 * (i.e., symmetric around its center).
 * 
 * Example 1:
 *         1
 *        / \
 *       2   2
 *      / \ / \
 *     3  4 4  3
 *   Input: root = [1,2,2,3,4,4,3]
 *   Output: true
 * 
 * Example 2:
 *       1
 *      / \
 *     2   2
 *      \   \
 *       3   3
 *   Input: root = [1,2,2,null,3,null,3]
 *   Output: false
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(h)
 */

import { TreeNode, createTree } from './tree-node';

function isSymmetric(root: TreeNode | null): boolean {
    // Your solution here
    return false;
}

// Test cases
console.log("Test 1:", isSymmetric(createTree([1,2,2,3,4,4,3])));
// Expected: true

console.log("Test 2:", isSymmetric(createTree([1,2,2,null,3,null,3])));
// Expected: false

console.log("Test 3:", isSymmetric(createTree([1])));
// Expected: true

console.log("Test 4:", isSymmetric(createTree([])));
// Expected: true

console.log("Test 5:", isSymmetric(createTree([1,2,2,null,3,3,null])));
// Expected: true

console.log("Test 6:", isSymmetric(createTree([1,2,3])));
// Expected: false

