/**
 * 226. Invert Binary Tree (Easy)
 * 
 * Given the root of a binary tree, invert the tree, and return its root.
 * (Swap left and right children at every node)
 * 
 * Example 1:
 *       4              4
 *      / \            / \
 *     2   7    =>    7   2
 *    / \ / \        / \ / \
 *   1  3 6  9      9  6 3  1
 * 
 *   Input: root = [4,2,7,1,3,6,9]
 *   Output: [4,7,2,9,6,3,1]
 * 
 * Example 2:
 *   Input: root = [2,1,3]
 *   Output: [2,3,1]
 * 
 * Example 3:
 *   Input: root = []
 *   Output: []
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(h)
 */

import { TreeNode, createTree, treeToArray } from './tree-node';

function invertTree(root: TreeNode | null): TreeNode | null {
    // Your solution here
    if (root === null) return null;
    const queue = [root];

    while(queue.length >  0) {
        const node = queue.shift() as TreeNode;
        
        [node.left, node.right] = [node.right, node.left];


        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return root;
}

function invertTreeRecursive(root: TreeNode | null):  TreeNode | null {

    if (root === null) return null;

    [root.left, root.right] = [invertTreeRecursive(root.right), invertTreeRecursive(root.left)]

    return root;
}

// Test cases
console.log("Test 1:", treeToArray(invertTree(createTree([4,2,7,1,3,6,9]))));
// Expected: [4,7,2,9,6,3,1]

console.log("Test 2:", treeToArray(invertTree(createTree([2,1,3]))));
// Expected: [2,3,1]

console.log("Test 3:", treeToArray(invertTree(createTree([]))));
// Expected: []

console.log("Test 4:", treeToArray(invertTree(createTree([1]))));
// Expected: [1]

console.log("Test 5:", treeToArray(invertTree(createTree([1,2]))));
// Expected: [1,null,2] or similar representation

