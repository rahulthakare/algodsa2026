/**
 * 261. Graph Valid Tree (Medium)
 * 
 * You have a graph of n nodes labeled from 0 to n - 1. 
 * You are given the integer n and a list of edges where edges[i] = [ai, bi] 
 * indicates that there is an undirected edge between nodes ai and bi.
 * 
 * Return true if the edges form a valid tree, false otherwise.
 * 
 * A valid tree has:
 * 1. Exactly n-1 edges (for n nodes)
 * 2. All nodes are connected (single component)
 * 3. No cycles
 * 
 * Example 1:
 *   0
 *  /|\
 * 1 2 3
 *   |
 *   4
 *   Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
 *   Output: true
 * 
 * Example 2:
 *   0---1
 *   |   |
 *   2---3
 *       |
 *       4
 *   Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
 *   Output: false (has cycle: 0-1-3-2-0 or 1-2-3-1)
 * 
 * Time Complexity Goal: O(V + E)
 * Space Complexity Goal: O(V + E)
 */

function validTree(n: number, edges: number[][]): boolean {
    // Your solution here
    return false;
}

// Test cases
console.log("Test 1:", validTree(5, [[0,1],[0,2],[0,3],[1,4]]));
// Expected: true

console.log("Test 2:", validTree(5, [[0,1],[1,2],[2,3],[1,3],[1,4]]));
// Expected: false (has cycle)

console.log("Test 3:", validTree(1, []));
// Expected: true (single node, no edges needed)

console.log("Test 4:", validTree(2, []));
// Expected: false (disconnected)

console.log("Test 5:", validTree(4, [[0,1],[2,3]]));
// Expected: false (two separate components)

console.log("Test 6:", validTree(3, [[0,1],[1,2]]));
// Expected: true

console.log("Test 7:", validTree(4, [[0,1],[0,2],[0,3]]));
// Expected: true (star graph)

