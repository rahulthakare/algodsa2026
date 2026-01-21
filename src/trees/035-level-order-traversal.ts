/**
 * 102. Binary Tree Level Order Traversal (Medium)
 * 
 * Given the root of a binary tree, return the level order traversal of its nodes' values.
 * (i.e., from left to right, level by level).
 * 
 * Example 1:
 *       3
 *      / \
 *     9  20
 *       /  \
 *      15   7
 *   Input: root = [3,9,20,null,null,15,7]
 *   Output: [[3],[9,20],[15,7]]
 * 
 * Example 2:
 *   Input: root = [1]
 *   Output: [[1]]
 * 
 * Example 3:
 *   Input: root = []
 *   Output: []
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(n)
 */

import { TreeNode, createTree } from './tree-node';

function levelOrder(root: TreeNode | null): number[][] {
    // Your solution here
    if (root === null) return [];

    const queue: TreeNode[] = [root]
    let result: number[][] =[];

    while(queue.length > 0) {

        const levelSize = queue.length;
        const levelArr: number[] = [];

        for (let i=0; i< levelSize; i++) {
            const node = queue.shift();

            levelArr.push(node?.val as number);

            if(node?.left) queue.push(node.left);
            if(node?.right) queue.push(node.right);
        }

        result.push(levelArr);

    }


    return result;
}

// Test cases
console.log("Test 1:", levelOrder(createTree([3,9,20,null,null,15,7])));
// Expected: [[3],[9,20],[15,7]]

console.log("Test 2:", levelOrder(createTree([1])));
// Expected: [[1]]

console.log("Test 3:", levelOrder(createTree([])));
// Expected: []

console.log("Test 4:", levelOrder(createTree([1,2,3,4,5,6,7])));
// Expected: [[1],[2,3],[4,5,6,7]]

