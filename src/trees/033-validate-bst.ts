/**
 * 98. Validate Binary Search Tree (Medium)
 * 
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * 
 * A valid BST is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree of a node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 * 
 * Example 1:
 *     2
 *    / \
 *   1   3
 *   Input: root = [2,1,3]
 *   Output: true
 * 
 * Example 2:
 *       5
 *      / \
 *     1   4
 *        / \
 *       3   6
 *   Input: root = [5,1,4,null,null,3,6]
 *   Output: false
 *   Explanation: The root node's value is 5 but its right child's value is 4.
 * 
 * Example 3 (Tricky!):
 *       5
 *      / \
 *     4   6
 *        / \
 *       3   7
 *   Input: root = [5,4,6,null,null,3,7]
 *   Output: false
 *   Explanation: 3 is in the RIGHT subtree of 5, so it must be > 5, but it's not!
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(h)
 */

import { TreeNode, createTree } from './tree-node';

function isValidBST(root: TreeNode | null): boolean {
    
    function validate(node: TreeNode | null,  min : number, max: number): boolean {
        if(node === null) return true;

        if (node.val < min || node.val > max) return false;

        return validate(node.left, min, node.val) && validate(node.right, node.val, max)
    }

    return validate(root, -Infinity, Infinity);
}

// Test cases
console.log("Test 1:", isValidBST(createTree([2,1,3])));
// Expected: true

console.log("Test 2:", isValidBST(createTree([5,1,4,null,null,3,6])));
// Expected: false

console.log("Test 3:", isValidBST(createTree([5,4,6,null,null,3,7])));
// Expected: false (3 is in right subtree of 5 but < 5)

console.log("Test 4:", isValidBST(createTree([1])));
// Expected: true

console.log("Test 5:", isValidBST(createTree([])));
// Expected: true

console.log("Test 6:", isValidBST(createTree([10,5,15,null,null,6,20])));
// Expected: false (6 is in right subtree of 10 but < 10)

console.log("Test 7:", isValidBST(createTree([3,1,5,0,2,4,6])));
// Expected: true (valid BST)

