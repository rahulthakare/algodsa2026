/**
 * 162. Find Peak Element (Medium)
 * 
 * A peak element is an element that is strictly greater than its neighbors.
 * 
 * Given a 0-indexed integer array nums, find a peak element, and return its index.
 * If the array contains multiple peaks, return the index to ANY of the peaks.
 * 
 * You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is
 * always considered to be strictly greater than a neighbor that is outside the array.
 * 
 * You must write an algorithm that runs in O(log n) time.
 * 
 * Example 1:
 *   Input: nums = [1,2,3,1]
 *   Output: 2
 *   Explanation: 3 is a peak element (index 2)
 * 
 * Example 2:
 *   Input: nums = [1,2,1,3,5,6,4]
 *   Output: 5 (or 1)
 *   Explanation: Index 1 (value 2) or index 5 (value 6) are peaks
 * 
 * Constraints:
 * - 1 <= nums.length <= 1000
 * - -2^31 <= nums[i] <= 2^31 - 1
 * - nums[i] != nums[i + 1] for all valid i
 * 
 * Time Complexity Goal: O(log n)
 * Space Complexity Goal: O(1)
 */

function findPeakElement(nums: number[]): number {
    // Your solution here

    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        const left = mid === 0 ? -Infinity : nums[mid - 1]
        const right = mid === nums.length - 1 ? -Infinity : nums[mid + 1];

        if (left < nums[mid] && nums[mid] > right ) {
            return mid;
        } else if (nums[mid + 1] > nums[mid]) {
            start = mid +1
        } else {
            end = mid -1;
        }

    }

    return -1;


}

// Test cases
console.log("Test 1:", findPeakElement([1,2,3,1]));
// Expected: 2

console.log("Test 2:", findPeakElement([1,2,1,3,5,6,4]));
// Expected: 1 or 5 (any peak)

console.log("Test 3:", findPeakElement([1]));
// Expected: 0

console.log("Test 4:", findPeakElement([1,2]));
// Expected: 1

console.log("Test 5:", findPeakElement([2,1]));
// Expected: 0

console.log("Test 6:", findPeakElement([1,2,3,4,5]));
// Expected: 4 (ascending, last element is peak)

console.log("Test 7:", findPeakElement([5,4,3,2,1]));
// Expected: 0 (descending, first element is peak)

