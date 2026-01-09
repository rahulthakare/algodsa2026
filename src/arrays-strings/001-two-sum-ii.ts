/**
 * Problem: Two Sum II - Input Array Is Sorted
 * Difficulty: Easy-Medium
 * Topic: Arrays, Two Pointers
 * 
 * Given a 1-indexed sorted array, find two numbers that add up to target.
 * Return their 1-indexed positions.
 * 
 * Constraints:
 * - Must use O(1) extra space
 * - Exactly one solution exists
 */

function twoSum(numbers: number[], target: number): number[] {
    // Your solution here
    let left = 0
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right]
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++
        } else {
            right--;
        }
    }
    return [-1, -1];
}

// ============ TEST CASES ============
console.log("Test 1:", twoSum([2, 7, 11, 15], 9));  // Expected: [1, 2]
console.log("Test 2:", twoSum([2, 3, 4], 6));       // Expected: [1, 3]
console.log("Test 3:", twoSum([-1, 0], -1));        // Expected: [1, 2]
console.log("Test 4:", twoSum([1, 2, 3, 4, 5], 9)); // Expected: [4, 5]

