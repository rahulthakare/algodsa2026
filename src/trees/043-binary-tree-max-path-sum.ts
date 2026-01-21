/**
 * 124. Binary Tree Maximum Path Sum (Hard)
 * 
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes
 * has an edge connecting them. A node can only appear in the sequence at most once.
 * Note that the path does not need to pass through the root.
 * 
 * The path sum of a path is the sum of the node's values in the path.
 * 
 * Given the root of a binary tree, return the maximum path sum of any non-empty path.
 * 
 * Example 1:
 *     1
 *    / \
 *   2   3
 *   Input: root = [1,2,3]
 *   Output: 6
 *   Explanation: The optimal path is 2 → 1 → 3 with sum = 2 + 1 + 3 = 6.
 * 
 * Example 2:
 *      -10
 *      /  \
 *     9   20
 *        /  \
 *       15   7
 *   Input: root = [-10,9,20,null,null,15,7]
 *   Output: 42
 *   Explanation: The optimal path is 15 → 20 → 7 with sum = 15 + 20 + 7 = 42.
 * 
 * Example 3:
 *   Input: root = [-3]
 *   Output: -3
 * 
 * Constraints:
 * - Node values can be negative
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(h)
 */

import { TreeNode, createTree } from './tree-node';

function maxPathSum(root: TreeNode | null): number {
    // Your solution here
    return 0;
}

// Test cases
console.log("Test 1:", maxPathSum(createTree([1,2,3])));
// Expected: 6

console.log("Test 2:", maxPathSum(createTree([-10,9,20,null,null,15,7])));
// Expected: 42

console.log("Test 3:", maxPathSum(createTree([-3])));
// Expected: -3

console.log("Test 4:", maxPathSum(createTree([2,-1])));
// Expected: 2

console.log("Test 5:", maxPathSum(createTree([1,-2,3])));
// Expected: 4 (path: 1 → 3)

console.log("Test 6:", maxPathSum(createTree([5,4,8,11,null,13,4,7,2,null,null,null,1])));
// Expected: 48 (path: 7 → 11 → 4 → 5 → 8 → 13)

