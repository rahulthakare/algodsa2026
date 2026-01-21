/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal (Medium)
 * 
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal
 * of a binary tree and inorder is the inorder traversal of the same tree,
 * construct and return the binary tree.
 * 
 * Example 1:
 *       3
 *      / \
 *     9  20
 *       /  \
 *      15   7
 *   Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 *   Output: [3,9,20,null,null,15,7]
 * 
 * Example 2:
 *   Input: preorder = [-1], inorder = [-1]
 *   Output: [-1]
 * 
 * Constraints:
 * - All values are unique
 * - preorder and inorder consist of the same elements
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(n)
 */

import { TreeNode, createTree, treeToArray } from './tree-node';

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    // Your solution here
    return null;
}

// Test cases
console.log("Test 1:", treeToArray(buildTree([3,9,20,15,7], [9,3,15,20,7])));
// Expected: [3,9,20,null,null,15,7]

console.log("Test 2:", treeToArray(buildTree([-1], [-1])));
// Expected: [-1]

console.log("Test 3:", treeToArray(buildTree([1,2,3], [2,1,3])));
// Expected: [1,2,3]

console.log("Test 4:", treeToArray(buildTree([1,2,4,5,3,6,7], [4,2,5,1,6,3,7])));
// Expected: [1,2,3,4,5,6,7]
//       1
//      / \
//     2   3
//    / \ / \
//   4  5 6  7

