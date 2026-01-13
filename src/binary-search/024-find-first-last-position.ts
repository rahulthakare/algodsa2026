/**
 * 34. Find First and Last Position of Element in Sorted Array (Medium)
 * 
 * Given an array of integers nums sorted in non-decreasing order,
 * find the starting and ending position of a given target value.
 * 
 * If target is not found in the array, return [-1, -1].
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 *   Input: nums = [5,7,7,8,8,10], target = 8
 *   Output: [3,4]
 * 
 * Example 2:
 *   Input: nums = [5,7,7,8,8,10], target = 6
 *   Output: [-1,-1]
 * 
 * Example 3:
 *   Input: nums = [], target = 0
 *   Output: [-1,-1]
 * 
 * Constraints:
 * - 0 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 * - nums is a non-decreasing array
 * - -10^9 <= target <= 10^9
 * 
 * Time Complexity Goal: O(log n)
 * Space Complexity Goal: O(1)
 */

function searchRange(nums: number[], target: number): number[] {
    // Your solution here
    
    const first = findBound(nums, target, true);
    if (first !== -1) {
        const second = findBound(nums, target, false);
        return [first, second]
    } else {
        return [-1 , -1];
    }

}

function findBound(nums : number[], target: number, findFirst:boolean) {

    let start = 0;
    let end = nums.length -1;
    let result = -1
    // find first
    while (start <= end) {
        let  mid = Math.floor((start + end) / 2);
        if (target === nums[mid]) {
            if (findFirst) {
                end = mid -1;
            } else {
                start = start + 1;
            }
            result = mid; 
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid -1;
        }
    }

    return result;
}

// Test cases
console.log("Test 1:", searchRange([5,7,7,8,8,10], 8));
// Expected: [3,4]

console.log("Test 2:", searchRange([5,7,7,8,8,10], 6));
// Expected: [-1,-1]

console.log("Test 3:", searchRange([], 0));
// Expected: [-1,-1]

console.log("Test 4:", searchRange([1], 1));
// Expected: [0,0]

console.log("Test 5:", searchRange([2,2], 2));
// Expected: [0,1]

console.log("Test 6:", searchRange([1,2,3,4,5], 3));
// Expected: [2,2]

console.log("Test 7:", searchRange([1,1,1,1,1], 1));
// Expected: [0,4]

