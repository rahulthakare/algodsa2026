/**
 * 297. Serialize and Deserialize Binary Tree (Hard)
 * 
 * Serialization is the process of converting a data structure into a sequence of bits
 * so that it can be stored or transmitted. Design an algorithm to serialize and
 * deserialize a binary tree.
 * 
 * You need to implement:
 * - serialize(root): Encodes a tree to a single string.
 * - deserialize(data): Decodes your encoded data to tree.
 * 
 * Example 1:
 *       1
 *      / \
 *     2   3
 *        / \
 *       4   5
 *   Input: root = [1,2,3,null,null,4,5]
 *   serialize(root) → some string representation
 *   deserialize(string) → reconstructed tree
 * 
 * Example 2:
 *   Input: root = []
 *   Output: []
 * 
 * The encoded string should allow you to reconstruct the exact same tree.
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(n)
 */

import { TreeNode, createTree, treeToArray } from './tree-node';

function serialize(root: TreeNode | null): string {
    // Your solution here
    return "";
}

function deserialize(data: string): TreeNode | null {
    // Your solution here
    return null;
}

// Test cases
const tree1 = createTree([1,2,3,null,null,4,5]);
const serialized1 = serialize(tree1);
console.log("Test 1 serialized:", serialized1);
console.log("Test 1 deserialized:", treeToArray(deserialize(serialized1)));
// Expected: Original tree [1,2,3,null,null,4,5]

const tree2 = createTree([]);
const serialized2 = serialize(tree2);
console.log("Test 2 serialized:", serialized2);
console.log("Test 2 deserialized:", treeToArray(deserialize(serialized2)));
// Expected: []

const tree3 = createTree([1,2,3,4,5,6,7]);
const serialized3 = serialize(tree3);
console.log("Test 3 serialized:", serialized3);
console.log("Test 3 deserialized:", treeToArray(deserialize(serialized3)));
// Expected: [1,2,3,4,5,6,7]

const tree4 = createTree([5,4,7,3,null,2,null,-1,null,9]);
const serialized4 = serialize(tree4);
console.log("Test 4 deserialized matches:", 
    JSON.stringify(treeToArray(deserialize(serialized4))) === JSON.stringify(treeToArray(tree4)));
// Expected: true

