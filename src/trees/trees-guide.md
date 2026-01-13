# Trees - Complete Interview Guide

## Table of Contents
1. [Basic Concepts](#basic-concepts)
2. [Tree Terminology](#tree-terminology)
3. [Types of Trees](#types-of-trees)
4. [Tree Traversals](#tree-traversals)
5. [Common Patterns](#common-patterns)
6. [Time & Space Complexity](#time--space-complexity)
7. [Interview Tips](#interview-tips)

---

## Basic Concepts

### What is a Tree?
A tree is a hierarchical data structure consisting of nodes connected by edges. It's a special type of graph that is:
- **Connected**: All nodes are reachable from the root
- **Acyclic**: No cycles exist
- **Has exactly N-1 edges** for N nodes

### Binary Tree Node Structure
```typescript
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    
    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
```

---

## Tree Terminology

| Term | Definition |
|------|------------|
| **Root** | The topmost node (no parent) |
| **Leaf** | A node with no children |
| **Parent** | Node directly above another node |
| **Child** | Node directly below another node |
| **Sibling** | Nodes sharing the same parent |
| **Ancestor** | Any node on the path from root to a node |
| **Descendant** | Any node reachable going down from a node |
| **Depth** | Distance from root to a node (root = 0) |
| **Height** | Distance from a node to its deepest leaf |
| **Level** | All nodes at the same depth |
| **Subtree** | A node and all its descendants |

### Visual Example
```
        1          ← Root (depth 0, height 3)
       / \
      2   3        ← Level 1 (depth 1)
     / \   \
    4   5   6      ← Level 2
   /
  7                ← Leaf (depth 3)

- Node 4's height = 1 (one edge to leaf 7)
- Node 2's subtree = {2, 4, 5, 7}
- Nodes 4, 5 are siblings
```

---

## Types of Trees

### 1. Binary Tree
Each node has **at most 2 children** (left and right).

### 2. Binary Search Tree (BST)
A binary tree with ordering property:
- Left subtree contains only values **less than** the node
- Right subtree contains only values **greater than** the node
- Both subtrees are also BSTs

```
     8          Valid BST:
    / \         - All left < 8
   3   10       - All right > 8
  / \    \
 1   6    14
    / \   /
   4   7 13
```

### 3. Balanced Binary Tree
Height difference between left and right subtrees is **at most 1** for every node.

```
Balanced:       Unbalanced:
    1               1
   / \               \
  2   3               2
 / \                   \
4   5                   3
                         \
                          4
```

### 4. Complete Binary Tree
All levels are fully filled except possibly the last, which is filled left to right.

```
Complete:       Not Complete:
    1               1
   / \             / \
  2   3           2   3
 / \             /     \
4   5           4       5
```

### 5. Perfect Binary Tree
All internal nodes have exactly 2 children, and all leaves are at the same level.

```
    1
   / \
  2   3
 /\ / \
4 5 6  7
```

### 6. Full Binary Tree
Every node has either 0 or 2 children (no nodes with only 1 child).

---

## Tree Traversals

### 1. Depth-First Search (DFS)

#### Pre-order (Root → Left → Right)
**Use case**: Copy a tree, serialize/deserialize, prefix expression

```typescript
function preorder(node: TreeNode | null): void {
    if (node === null) return;
    
    console.log(node.val);     // Process root FIRST
    preorder(node.left);       // Then left
    preorder(node.right);      // Then right
}

// Tree:     1
//          / \
//         2   3
// Output: 1, 2, 3
```

#### In-order (Left → Root → Right)
**Use case**: BST gives sorted order, validate BST

```typescript
function inorder(node: TreeNode | null): void {
    if (node === null) return;
    
    inorder(node.left);        // Left first
    console.log(node.val);     // Process root in MIDDLE
    inorder(node.right);       // Then right
}

// BST:      2
//          / \
//         1   3
// Output: 1, 2, 3 (sorted!)
```

#### Post-order (Left → Right → Root)
**Use case**: Delete tree, calculate directory size, expression evaluation

```typescript
function postorder(node: TreeNode | null): void {
    if (node === null) return;
    
    postorder(node.left);      // Left first
    postorder(node.right);     // Then right
    console.log(node.val);     // Process root LAST
}

// Tree:     1
//          / \
//         2   3
// Output: 2, 3, 1
```

### 2. Breadth-First Search (BFS) / Level-Order

**Use case**: Level-by-level processing, shortest path in unweighted tree

```typescript
function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) return [];
    
    const result: number[][] = [];
    const queue: TreeNode[] = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel: number[] = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}

// Tree:     1
//          / \
//         2   3
//        /
//       4
// Output: [[1], [2, 3], [4]]
```

### Traversal Summary

| Traversal | Order | Data Structure | Use Cases |
|-----------|-------|----------------|-----------|
| Pre-order | Root, L, R | Stack/Recursion | Copy tree, serialize |
| In-order | L, Root, R | Stack/Recursion | BST sorted order |
| Post-order | L, R, Root | Stack/Recursion | Delete tree, calc size |
| Level-order | Level by level | Queue | BFS, min depth |

---

## Common Patterns

### Pattern 1: Basic Recursion (Height/Depth)
```typescript
function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return 1 + Math.max(leftDepth, rightDepth);
}
```

### Pattern 2: Passing Values Down (Top-Down)
```typescript
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) return false;
    
    // Leaf node check
    if (root.left === null && root.right === null) {
        return targetSum === root.val;
    }
    
    // Pass remaining sum down
    const remaining = targetSum - root.val;
    return hasPathSum(root.left, remaining) || 
           hasPathSum(root.right, remaining);
}
```

### Pattern 3: Collecting Results Up (Bottom-Up)
```typescript
function isBalanced(root: TreeNode | null): boolean {
    function height(node: TreeNode | null): number {
        if (node === null) return 0;
        
        const left = height(node.left);
        const right = height(node.right);
        
        // -1 signals unbalanced
        if (left === -1 || right === -1) return -1;
        if (Math.abs(left - right) > 1) return -1;
        
        return 1 + Math.max(left, right);
    }
    
    return height(root) !== -1;
}
```

### Pattern 4: BST Bounds Validation
```typescript
function isValidBST(root: TreeNode | null): boolean {
    function validate(
        node: TreeNode | null, 
        min: number, 
        max: number
    ): boolean {
        if (node === null) return true;
        
        if (node.val <= min || node.val >= max) {
            return false;
        }
        
        return validate(node.left, min, node.val) &&
               validate(node.right, node.val, max);
    }
    
    return validate(root, -Infinity, Infinity);
}
```

### Pattern 5: Lowest Common Ancestor
```typescript
function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode,
    q: TreeNode
): TreeNode | null {
    if (root === null) return null;
    if (root === p || root === q) return root;
    
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    
    // If both sides found something, root is LCA
    if (left !== null && right !== null) return root;
    
    // Otherwise, return whichever side found something
    return left !== null ? left : right;
}
```

### Pattern 6: Tree Construction
```typescript
// Build tree from preorder + inorder
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0) return null;
    
    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);
    
    const rootIdx = inorder.indexOf(rootVal);
    
    root.left = buildTree(
        preorder.slice(1, rootIdx + 1),
        inorder.slice(0, rootIdx)
    );
    root.right = buildTree(
        preorder.slice(rootIdx + 1),
        inorder.slice(rootIdx + 1)
    );
    
    return root;
}
```

---

## Time & Space Complexity

### Operations

| Operation | BST Average | BST Worst | Balanced BST |
|-----------|-------------|-----------|--------------|
| Search | O(log n) | O(n) | O(log n) |
| Insert | O(log n) | O(n) | O(log n) |
| Delete | O(log n) | O(n) | O(log n) |

### Traversal Complexity

| Traversal | Time | Space |
|-----------|------|-------|
| DFS (all types) | O(n) | O(h) → O(n) worst |
| BFS | O(n) | O(w) → O(n) for complete tree |

Where:
- **n** = number of nodes
- **h** = height of tree
- **w** = maximum width of tree

---

## Interview Tips

### 1. Always Handle Base Cases First
```typescript
if (root === null) return ...;
```

### 2. Identify the Pattern
- **Is it asking for height/depth?** → Basic recursion
- **Is it a BST?** → Consider in-order or bounds checking
- **Need level info?** → Consider BFS
- **Path-related?** → Pass values down (top-down)
- **Subtree calculation?** → Collect values up (bottom-up)

### 3. Draw the Tree!
Always sketch the tree for the examples. It helps visualize:
- Edge cases (empty, single node)
- How recursion flows
- What values get passed/returned

### 4. Common Edge Cases
- Empty tree (`root === null`)
- Single node
- Skewed tree (all left or all right)
- Complete vs incomplete levels
- Duplicate values (clarify with interviewer)

### 5. Space Complexity Trap
Recursion uses the call stack!
- Balanced tree: O(log n)
- Skewed tree: O(n) — can cause stack overflow

### 6. Iterative vs Recursive
- Recursive is usually cleaner for trees
- Iterative needed if worried about stack overflow
- DFS iterative uses explicit stack
- BFS uses queue

---

## Quick Reference: Which Traversal to Use?

| Problem Type | Traversal | Why |
|--------------|-----------|-----|
| Print sorted BST | In-order | L < Root < R |
| Copy/Clone tree | Pre-order | Need parent before children |
| Delete tree | Post-order | Delete children before parent |
| Find min depth | BFS | Stop at first leaf |
| Level averages | BFS | Need level grouping |
| Validate BST | In-order or bounds | Check ordering |
| Serialize tree | Pre-order + null markers | Root first |
| Path sum | DFS (any) | Need full path |

---

## Practice Problems (This Repo)

| # | Problem | Pattern |
|---|---------|---------|
| 030 | Maximum Depth | Basic recursion |
| 031 | Invert Tree | Tree manipulation |
| 032 | Same Tree | Parallel DFS |
| 033 | Validate BST | Bounds checking |
| 034 | Lowest Common Ancestor | Post-order |

---

## Additional Resources

- **Visualize**: [VisuAlgo BST](https://visualgo.net/en/bst)
- **Practice**: LeetCode Tree tag
- **Patterns**: "Grokking the Coding Interview" tree patterns

