/**
 * 104. Maximum Depth of Binary Tree (Easy)
 * 
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 * 
 * Example 1:
 *       3
 *      / \
 *     9  20
 *       /  \
 *      15   7
 *   Input: root = [3,9,20,null,null,15,7]
 *   Output: 3
 * 
 * Example 2:
 *   Input: root = [1,null,2]
 *   Output: 2
 * 
 * Example 3:
 *   Input: root = []
 *   Output: 0
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(h) where h is height (O(n) worst case for skewed tree)
 */

import { TreeNode, createTree } from './tree-node';

function maxDepth(root: TreeNode | null): number {
    // Your solution here

    if (root === null) return 0;
    let result: number[][] = [];
    let queue = [root];

    while(queue.length > 0) {
        const levelSize = queue.length;
        const levelItems: number[] =[];

         for (let i =0; i <levelSize; i++) {
            const node = queue.shift();

            levelItems.push(node?.val as number);

            if (node?.left) queue.push(node?.left);
            if (node?.right) queue.push(node?.right)
            
        }
        if (levelItems.length > 0) result.push(levelItems);
    }
    return result.length;
}

function maxDepthRecursive(root: TreeNode | null ): number {

    if(root === null) return 0;

    return 1 + Math.max(maxDepthRecursive(root.left), maxDepthRecursive(root.right));
}

// Test cases
console.log("Test 1:", maxDepth(createTree([3,9,20,null,null,15,7])));
// Expected: 3

console.log("Test 2:", maxDepth(createTree([1,null,2])));
// Expected: 2

console.log("Test 3:", maxDepth(createTree([])));
// Expected: 0

console.log("Test 4:", maxDepth(createTree([1])));
// Expected: 1

console.log("Test 5:", maxDepth(createTree([1,2,3,4,5])));
// Expected: 3
//       1
//      / \
//     2   3
//    / \
//   4   5

// Recursive tests
console.log("\n=== Recursive ===");
console.log("Test 1:", maxDepthRecursive(createTree([3,9,20,null,null,15,7])));
// Expected: 3

console.log("Test 2:", maxDepthRecursive(createTree([1,null,2])));
// Expected: 2

console.log("Test 3:", maxDepthRecursive(createTree([])));
// Expected: 0

console.log("Test 4:", maxDepthRecursive(createTree([1])));
// Expected: 1

console.log("Test 5:", maxDepthRecursive(createTree([1,2,3,4,5])));
// Expected: 3
