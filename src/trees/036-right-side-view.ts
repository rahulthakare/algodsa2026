/**
 * 199. Binary Tree Right Side View (Medium)
 * 
 * Given the root of a binary tree, imagine yourself standing on the right side of it.
 * Return the values of the nodes you can see ordered from top to bottom.
 * 
 * Example 1:
 *       1        ← see 1
 *      / \
 *     2   3      ← see 3
 *      \   \
 *       5   4    ← see 4
 *   Input: root = [1,2,3,null,5,null,4]
 *   Output: [1,3,4]
 * 
 * Example 2:
 *       1        ← see 1
 *        \
 *         3      ← see 3
 *   Input: root = [1,null,3]
 *   Output: [1,3]
 * 
 * Example 3:
 *   Input: root = []
 *   Output: []
 * 
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(n)
 */

import { TreeNode, createTree } from './tree-node';

function rightSideView(root: TreeNode | null): number[] {
    // Your solution here
    if (root === null) return [];

    const queue: TreeNode[] = [root]
    let result: number[] =[];

    while(queue.length > 0) {

        const levelSize = queue.length;

        for (let i=0; i< levelSize; i++) {
            const node = queue.shift();

            if (i === levelSize -1 ) {
                result.push(node?.val as number);
            }

            if(node?.left) queue.push(node.left);
            if(node?.right) queue.push(node.right);
        }


    }


    return result;
}

// Test cases
console.log("Test 1:", rightSideView(createTree([1,2,3,null,5,null,4])));
// Expected: [1,3,4]

console.log("Test 2:", rightSideView(createTree([1,null,3])));
// Expected: [1,3]

console.log("Test 3:", rightSideView(createTree([])));
// Expected: []

console.log("Test 4:", rightSideView(createTree([1,2,3,4])));
// Expected: [1,3,4]
//       1
//      / \
//     2   3
//    /
//   4    ← 4 is visible from right (no node blocking it at level 3)

