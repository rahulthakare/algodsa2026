/**
 * 114. Flatten Binary Tree to Linked List (Medium)
 * 
 * Given the root of a binary tree, flatten the tree into a "linked list":
 * - The "linked list" should use the same TreeNode class where the right child 
 *   pointer points to the next node in the list and the left child pointer is always null.
 * - The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 * 
 * Example 1:
 *       1              1
 *      / \              \
 *     2   5      =>      2
 *    / \   \              \
 *   3   4   6              3
 *                           \
 *                            4
 *                             \
 *                              5
 *                               \
 *                                6
 *   Input: root = [1,2,5,3,4,null,6]
 *   Output: [1,null,2,null,3,null,4,null,5,null,6]
 * 
 * Example 2:
 *   Input: root = []
 *   Output: []
 * 
 * Example 3:
 *   Input: root = [0]
 *   Output: [0]
 * 
 * Note: Do this in-place (modify the tree, don't create new nodes).
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(1) or O(h) depending on approach
 */

import { TreeNode, createTree, treeToArray } from './tree-node';

function flatten(root: TreeNode | null): void {
    // Your solution here (modify tree in place)
}

// Helper to print flattened list
function printFlattened(root: TreeNode | null): number[] {
    const result: number[] = [];
    let curr = root;
    while (curr !== null) {
        result.push(curr.val);
        if (curr.left !== null) {
            result.push(-999); // Error indicator: left should be null
        }
        curr = curr.right;
    }
    return result;
}

// Test cases
const tree1 = createTree([1,2,5,3,4,null,6]);
flatten(tree1);
console.log("Test 1:", printFlattened(tree1));
// Expected: [1,2,3,4,5,6]

const tree2 = createTree([]);
flatten(tree2);
console.log("Test 2:", printFlattened(tree2));
// Expected: []

const tree3 = createTree([0]);
flatten(tree3);
console.log("Test 3:", printFlattened(tree3));
// Expected: [0]

const tree4 = createTree([1,2,null,3]);
flatten(tree4);
console.log("Test 4:", printFlattened(tree4));
// Expected: [1,2,3]

const tree5 = createTree([1,null,2,null,3]);
flatten(tree5);
console.log("Test 5:", printFlattened(tree5));
// Expected: [1,2,3]

