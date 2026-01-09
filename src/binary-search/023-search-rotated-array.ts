/**
 * 33. Search in Rotated Sorted Array (Medium)
 * 
 * There is an integer array nums sorted in ascending order (with distinct values).
 * 
 * Prior to being passed to your function, nums is possibly rotated at an unknown
 * pivot index k (1 <= k < nums.length) such that the resulting array is:
 * [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]
 * 
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 to become [4,5,6,7,0,1,2].
 * 
 * Given the array nums after the possible rotation and an integer target,
 * return the index of target if it is in nums, or -1 if it is not in nums.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 *   Input: nums = [4,5,6,7,0,1,2], target = 0
 *   Output: 4
 * 
 * Example 2:
 *   Input: nums = [4,5,6,7,0,1,2], target = 3
 *   Output: -1
 * 
 * Example 3:
 *   Input: nums = [1], target = 0
 *   Output: -1
 * 
 * Constraints:
 * - 1 <= nums.length <= 5000
 * - -10^4 <= nums[i] <= 10^4
 * - All values of nums are unique
 * - nums is an ascending array that is possibly rotated
 * - -10^4 <= target <= 10^4
 * 
 * Time Complexity Goal: O(log n)
 * Space Complexity Goal: O(1)
 */

import {search} from './022-binary-search';


function searchRotated(nums: number[], target: number): number {
    // Your solution here
    let start = 0;
    let end = nums.length -1;
    // One pass

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (target === nums[mid]) {
            return mid
        }
        // which half is sorted // left half
        if (nums[start] < nums[mid]) {
            if (target < nums[mid] && target >= nums[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
             if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1 ;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}

// Test cases
console.log("Test 1:", searchRotated([4,5,6,7,0,1,2], 0));
// Expected: 4

console.log("Test 2:", searchRotated([4,5,6,7,0,1,2], 3));
// Expected: -1

console.log("Test 3:", searchRotated([1], 0));
// Expected: -1

console.log("Test 4:", searchRotated([1], 1));
// Expected: 0

console.log("Test 5:", searchRotated([4,5,6,7,0,1,2], 4));
// Expected: 0 (first element)

console.log("Test 6:", searchRotated([4,5,6,7,0,1,2], 2));
// Expected: 6 (last element)

console.log("Test 7:", searchRotated([1,2,3,4,5], 3));
// Expected: 2 (not rotated)

console.log("Test 8:", searchRotated([3,1], 1));
// Expected: 1

console.log("Test 9:", searchRotated([5,1,3], 5));
// Expected: 0

