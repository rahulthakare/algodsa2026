/**
 * 236. Lowest Common Ancestor of a Binary Tree (Medium)
 * 
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes.
 * 
 * The LCA is defined as the lowest node in the tree that has both p and q 
 * as descendants (a node can be a descendant of itself).
 * 
 * Example 1: p = 5, q = 1
 *         [3]  ← LCA (lowest node with both 5 and 1 as descendants)
 *        /   \
 *      (5)   (1)
 *      / \   / \
 *     6   2 0   8
 *        / \
 *       7   4
 *   Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 *   Output: 3
 *   Explanation: LCA of nodes 5 and 1 is 3.
 * 
 * Example 2: p = 5, q = 4
 *          3
 *        /   \
 *      [5]    1      ← LCA is 5 (5 is ancestor of itself and 4)
 *      / \   / \
 *     6   2 0   8
 *        / \
 *       7  (4)
 *   Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 *   Output: 5
 *   Explanation: LCA of nodes 5 and 4 is 5 (a node can be its own ancestor).
 * 
 * Example 3: p = 1, q = 2
 *      [1]  ← LCA (1 is ancestor of itself and 2)
 *      /
 *    (2)
 *   Input: root = [1,2], p = 1, q = 2
 *   Output: 1
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(h)
 */

import { TreeNode, createTree } from './tree-node';

function lowestCommonAncestor(
    root: TreeNode | null, 
    p: TreeNode | null, 
    q: TreeNode | null
): TreeNode | null {
    // Your solution here
    if (root === null) return null;
    if( root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left !== null && right !== null) {
        return root;
    }


    return left ?? right;

}

// Helper to find a node by value
function findNode(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null) return null;
    if (root.val === val) return root;
    return findNode(root.left, val) || findNode(root.right, val);
}

// Test cases
const tree1 = createTree([3,5,1,6,2,0,8,null,null,7,4]);
const p1 = findNode(tree1, 5);
const q1 = findNode(tree1, 1);
console.log("Test 1:", lowestCommonAncestor(tree1, p1, q1)?.val);
// Expected: 3

const p2 = findNode(tree1, 5);
const q2 = findNode(tree1, 4);
console.log("Test 2:", lowestCommonAncestor(tree1, p2, q2)?.val);
// Expected: 5

const tree2 = createTree([1,2]);
const p3 = findNode(tree2, 1);
const q3 = findNode(tree2, 2);
console.log("Test 3:", lowestCommonAncestor(tree2, p3, q3)?.val);
// Expected: 1

const p4 = findNode(tree1, 6);
const q4 = findNode(tree1, 4);
console.log("Test 4:", lowestCommonAncestor(tree1, p4, q4)?.val);
// Expected: 5

const p5 = findNode(tree1, 0);
const q5 = findNode(tree1, 8);
console.log("Test 5:", lowestCommonAncestor(tree1, p5, q5)?.val);
// Expected: 1

