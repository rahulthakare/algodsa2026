/**
 * 112. Path Sum (Easy)
 * 
 * Given the root of a binary tree and an integer targetSum, return true if the tree
 * has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 * 
 * A leaf is a node with no children.
 * 
 * Example 1:
 *         5
 *        / \
 *       4   8
 *      /   / \
 *     11  13  4
 *    /  \      \
 *   7    2      1
 *   Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 *   Output: true (path: 5 → 4 → 11 → 2)
 * 
 * Example 2:
 *     1
 *    / \
 *   2   3
 *   Input: root = [1,2,3], targetSum = 5
 *   Output: false
 * 
 * Example 3:
 *   Input: root = [], targetSum = 0
 *   Output: false
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(h)
 */

import { TreeNode, createTree } from './tree-node';

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    // Your solution here
    return false;
}

// Test cases
console.log("Test 1:", hasPathSum(createTree([5,4,8,11,null,13,4,7,2,null,null,null,1]), 22));
// Expected: true

console.log("Test 2:", hasPathSum(createTree([1,2,3]), 5));
// Expected: false

console.log("Test 3:", hasPathSum(createTree([]), 0));
// Expected: false

console.log("Test 4:", hasPathSum(createTree([1,2]), 1));
// Expected: false (1 is not a leaf, path must end at leaf)

console.log("Test 5:", hasPathSum(createTree([1,2]), 3));
// Expected: true (path: 1 → 2)

console.log("Test 6:", hasPathSum(createTree([1]), 1));
// Expected: true

