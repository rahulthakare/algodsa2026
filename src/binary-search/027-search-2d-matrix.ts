/**
 * 74. Search a 2D Matrix (Medium)
 * 
 * You are given an m x n integer matrix with the following properties:
 * - Each row is sorted in non-decreasing order.
 * - The first integer of each row is greater than the last integer of the previous row.
 * 
 * Given an integer target, return true if target is in matrix or false otherwise.
 * You must write a solution in O(log(m * n)) time complexity.
 * 
 * Example 1:
 *   Input: matrix = [[1,3,5,7],[10,11,16,20],[21,30,34,60]], target = 3
 *   Output: true
 * 
 * Example 2:
 *   Input: matrix = [[1,3,5,7],[10,11,16,20],[21,30,34,60]], target = 13
 *   Output: false
 * 
 * Example 3:
 *   Input: matrix = [[1]], target = 1
 *   Output: true
 * 
 * Hint: Treat the 2D matrix as a flattened 1D sorted array.
 *       Index i in 1D → row = Math.floor(i / cols), col = i % cols
 * 
 * Time Complexity Goal: O(log(m * n))
 * Space Complexity Goal: O(1)
 */

function searchMatrix(matrix: number[][], target: number): boolean {
    // Your solution here
    let rows = matrix.length;
    let cols = matrix[0].length;
    let start = 0;
    let end = rows * cols - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        const row = Math.floor(mid / cols);
        const col = Math.floor(mid % cols);

        if (matrix[row][col] === target) {
            return true
        } else if (target > matrix[row][col]) {
            start = mid + 1;
        } else{ 
            end = mid- 1;

        }

    }
    
    return false;
}

// Test cases
console.log("Test 1:", searchMatrix([[1,3,5,7],[10,11,16,20],[21,30,34,60]], 3));
// Expected: true

console.log("Test 2:", searchMatrix([[1,3,5,7],[10,11,16,20],[21,30,34,60]], 13));
// Expected: false

console.log("Test 3:", searchMatrix([[1]], 1));
// Expected: true

console.log("Test 4:", searchMatrix([[1]], 2));
// Expected: false

console.log("Test 5:", searchMatrix([[1,3]], 3));
// Expected: true

console.log("Test 6:", searchMatrix([[1],[3],[5]], 3));
// Expected: true

console.log("Test 7:", searchMatrix([[1,3,5,7],[10,11,16,20],[21,30,34,60]], 60));
// Expected: true

