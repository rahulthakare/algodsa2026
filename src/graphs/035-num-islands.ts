/**
 * 200. Number of Islands (Medium)
 * 
 * Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water),
 * return the number of islands.
 * 
 * An island is surrounded by water and is formed by connecting adjacent lands 
 * horizontally or vertically. You may assume all four edges of the grid are 
 * surrounded by water.
 * 
 * Example 1:
 *   Input: grid = [
 *     ["1","1","1","1","0"],
 *     ["1","1","0","1","0"],
 *     ["1","1","0","0","0"],
 *     ["0","0","0","0","0"]
 *   ]
 *   Output: 1
 * 
 * Example 2:
 *   Input: grid = [
 *     ["1","1","0","0","0"],
 *     ["1","1","0","0","0"],
 *     ["0","0","1","0","0"],
 *     ["0","0","0","1","1"]
 *   ]
 *   Output: 3
 * 
 * Time Complexity Goal: O(m * n)
 * Space Complexity Goal: O(m * n) for recursion stack in worst case
 */

function numIslands(grid: string[][]): number {
    // Your solution here
    return -1;
}

// Test cases
console.log("Test 1:", numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]));
// Expected: 1

console.log("Test 2:", numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]));
// Expected: 3

console.log("Test 3:", numIslands([["1"]]));
// Expected: 1

console.log("Test 4:", numIslands([["0"]]));
// Expected: 0

console.log("Test 5:", numIslands([
    ["1","0","1","0","1"],
    ["0","1","0","1","0"],
    ["1","0","1","0","1"]
]));
// Expected: 8 (checkerboard pattern)

console.log("Test 6:", numIslands([]));
// Expected: 0

