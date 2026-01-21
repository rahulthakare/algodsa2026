/**
 * 543. Diameter of Binary Tree (Easy)
 * 
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * 
 * The diameter is the length of the longest path between any two nodes in a tree.
 * This path may or may not pass through the root.
 * 
 * The length of a path is the number of EDGES between nodes.
 * 
 * Example 1:
 *       1
 *      / \
 *     2   3      Longest path: 4 → 2 → 1 → 3 (or 5 → 2 → 1 → 3)
 *    / \         Length = 3 edges
 *   4   5
 *   Input: root = [1,2,3,4,5]
 *   Output: 3
 * 
 * Example 2:
 *     1
 *    /
 *   2
 *   Input: root = [1,2]
 *   Output: 1
 * 
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(h)
 */

import { TreeNode, createTree } from './tree-node';

function diameterOfBinaryTree(root: TreeNode | null): number {
    // Your solution here
    return -1;
}

// Test cases
console.log("Test 1:", diameterOfBinaryTree(createTree([1,2,3,4,5])));
// Expected: 3

console.log("Test 2:", diameterOfBinaryTree(createTree([1,2])));
// Expected: 1

console.log("Test 3:", diameterOfBinaryTree(createTree([1])));
// Expected: 0

console.log("Test 4:", diameterOfBinaryTree(createTree([])));
// Expected: 0

console.log("Test 5:", diameterOfBinaryTree(createTree([1,2,3,4,5,null,null,6,null,null,7])));
// Expected: 5
//        1
//       / \
//      2   3
//     / \
//    4   5
//   /     \
//  6       7
// Path: 6 → 4 → 2 → 5 → 7 = 4 edges... actually let me recalculate
// Longest: 6 → 4 → 2 → 1 → 3 = 4 edges OR 7 → 5 → 2 → 1 → 3 = 4 edges

