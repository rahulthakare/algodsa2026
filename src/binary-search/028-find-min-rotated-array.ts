/**
 * 153. Find Minimum in Rotated Sorted Array (Medium)
 * 
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
 * For example, the array nums = [0,1,2,4,5,6,7] might become:
 * - [4,5,6,7,0,1,2] if it was rotated 4 times.
 * - [0,1,2,4,5,6,7] if it was rotated 7 times.
 * 
 * Given the sorted rotated array nums of unique elements, return the minimum element.
 * You must write an algorithm that runs in O(log n) time.
 * 
 * Example 1:
 *   Input: nums = [3,4,5,1,2]
 *   Output: 1
 *   Explanation: The original array was [1,2,3,4,5] rotated 3 times.
 * 
 * Example 2:
 *   Input: nums = [4,5,6,7,0,1,2]
 *   Output: 0
 * 
 * Example 3:
 *   Input: nums = [11,13,15,17]
 *   Output: 11
 *   Explanation: Not rotated (or rotated n times).
 * 
 * 
 * 
 * Time Complexity Goal: O(log n)
 * Space Complexity Goal: O(1)
 */

function findMin(nums: number[]): number {
    

    let start = 0;
    let end = nums.length - 1;
    let minimum = -1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] > nums[end] ) {
            start = start + 1;
        } else {
            end = end - 1;
            minimum = (minimum == -1 || nums[mid] <= minimum) ? nums[mid] : minimum;
        }


    }
    return minimum;
}

// Test cases
console.log("Test 1:", findMin([3,4,5,1,2]));
// Expected: 1

console.log("Test 2:", findMin([4,5,6,7,0,1,2]));
// Expected: 0

console.log("Test 3:", findMin([11,13,15,17]));
// Expected: 11 (not rotated)

console.log("Test 4:", findMin([2,1]));
// Expected: 1

console.log("Test 5:", findMin([1]));
// Expected: 1

console.log("Test 6:", findMin([2,3,4,5,1]));
// Expected: 1

console.log("Test 7:", findMin([5,1,2,3,4]));
// Expected: 1

