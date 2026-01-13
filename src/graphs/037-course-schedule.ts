/**
 * 207. Course Schedule (Medium) - Cycle Detection / Topological Sort
 * 
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that 
 * you must take course bi first if you want to take course ai.
 * 
 * Return true if you can finish all courses. Otherwise, return false.
 * 
 * Example 1:
 *   Input: numCourses = 2, prerequisites = [[1,0]]
 *   Output: true
 *   Explanation: Take course 0 first, then course 1.
 * 
 * Example 2:
 *   Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 *   Output: false
 *   Explanation: There is a cycle (0 -> 1 -> 0).
 * 
 * Example 3:
 *   Input: numCourses = 4, prerequisites = [[1,0],[2,1],[3,2]]
 *   Output: true
 *   Explanation: 0 -> 1 -> 2 -> 3 (linear chain)
 * 
 * Time Complexity Goal: O(V + E)
 * Space Complexity Goal: O(V + E)
 */

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // Your solution here
    return false;
}

// Test cases
console.log("Test 1:", canFinish(2, [[1,0]]));
// Expected: true

console.log("Test 2:", canFinish(2, [[1,0],[0,1]]));
// Expected: false (cycle)

console.log("Test 3:", canFinish(4, [[1,0],[2,1],[3,2]]));
// Expected: true

console.log("Test 4:", canFinish(1, []));
// Expected: true (no prerequisites)

console.log("Test 5:", canFinish(3, [[0,1],[0,2],[1,2]]));
// Expected: true

console.log("Test 6:", canFinish(3, [[0,1],[1,2],[2,0]]));
// Expected: false (3-node cycle)

console.log("Test 7:", canFinish(5, [[1,0],[2,0],[3,1],[3,2],[4,3]]));
// Expected: true (diamond dependency)

