/**
 * Tree Traversals Practice
 * 
 * Implement all 4 traversal types:
 * 1. Pre-order (DFS) - Root, Left, Right
 * 2. In-order (DFS) - Left, Root, Right
 * 3. Post-order (DFS) - Left, Right, Root
 * 4. Level-order (BFS) - Level by level
 */

import { runInContext } from 'vm';
import { TreeNode, createTree } from './tree-node';

/**
 * Example Tree:
 *        1
 *       / \
 *      2   3
 *     / \   \
 *    4   5   6
 * 
 * Expected outputs:
 * - Pre-order:  [1, 2, 4, 5, 3, 6]
 * - In-order:   [4, 2, 5, 1, 3, 6]
 * - Post-order: [4, 5, 2, 6, 3, 1]
 * - Level-order: [[1], [2, 3], [4, 5, 6]]
 */

// ============================================
// 1. PRE-ORDER (Root → Left → Right)
// ============================================
function preorderTraversal(root: TreeNode | null): number[] {

    let result: number[] = [];
    function traverse(node:TreeNode | null) {
        // Your solution here
    if (node === null) return;
    result.push(node.val);
    traverse(node.left);
    traverse(node.right);

    }
    traverse(root);
    return result;
}

// ============================================
// 2. IN-ORDER (Left → Root → Right)
// ============================================
function inorderTraversal(root: TreeNode | null): number[] {
    // Your solution here
    let result: number[] = [];
    
    function traverse(node: TreeNode | null) {
        if(node === null) return;

        traverse(node.left);
        result.push(node.val);
        traverse(node.right)
    }

    traverse(root);
    return result;
}

// ============================================
// 3. POST-ORDER (Left → Right → Root)
// ============================================
function postorderTraversal(root: TreeNode | null): number[] {
     // Your solution here
    let result :number[] = []

    function traverse(node: TreeNode | null) {

        if(node === null) return;

        traverse(node.left);
        traverse(node.right);
        result.push(node.val)

    }
    traverse(root);
    
    return result;
}

// ============================================
// 4. LEVEL-ORDER / BFS (Level by level)
// ============================================
function levelOrderTraversal(root: TreeNode | null): number[][] {

    if (root === null) return []
    let result: number[][] = [];
    let queue: TreeNode[] = [root];

    while(queue.length > 0) {
        const levelSize = queue.length;
        const levelCount: number[] = [];

        for (let i=0; i<levelSize; i++) {
            const node = queue.shift() as TreeNode;

            levelCount.push(node.val);

            if(node.left) queue.push(node?.left as TreeNode);
            if(node.right) queue.push(node?.right as TreeNode);
        }

        result.push(levelCount);
       
        
    }
   return result;

}

// ============================================
// TEST CASES
// ============================================

const tree1 = createTree([1, 2, 3, 4, 5, null, 6]);
/*
       1
      / \
     2   3
    / \   \
   4   5   6
*/

console.log("=== Tree 1 ===");
console.log("Pre-order:", preorderTraversal(tree1));
// Expected: [1, 2, 4, 5, 3, 6]

console.log("In-order:", inorderTraversal(tree1));
// Expected: [4, 2, 5, 1, 3, 6]

console.log("Post-order:", postorderTraversal(tree1));
// Expected: [4, 5, 2, 6, 3, 1]

console.log("Level-order:", levelOrderTraversal(tree1));
// Expected: [[1], [2, 3], [4, 5, 6]]

console.log("\n=== Tree 2 (BST) ===");
const tree2 = createTree([4, 2, 6, 1, 3, 5, 7]);
/*
       4
      / \
     2   6
    / \ / \
   1  3 5  7
*/

console.log("Pre-order:", preorderTraversal(tree2));
// Expected: [4, 2, 1, 3, 6, 5, 7]

console.log("In-order:", inorderTraversal(tree2));
// Expected: [1, 2, 3, 4, 5, 6, 7] ← SORTED! (BST property)

console.log("Post-order:", postorderTraversal(tree2));
// Expected: [1, 3, 2, 5, 7, 6, 4]

console.log("Level-order:", levelOrderTraversal(tree2));
// Expected: [[4], [2, 6], [1, 3, 5, 7]]

console.log("\n=== Edge Cases ===");
console.log("Empty tree:", preorderTraversal(null));
// Expected: []

console.log("Single node:", preorderTraversal(createTree([1])));
// Expected: [1]

console.log("Left skewed:", inorderTraversal(createTree([3, 2, null, 1])));
// Expected: [1, 2, 3]
/*
     3
    /
   2
  /
 1
*/

