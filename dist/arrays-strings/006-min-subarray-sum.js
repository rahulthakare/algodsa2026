"use strict";
function minSubArrayLen(nums, target) {
    let minSubArray = 0;
    let left = 0;
    let sum = 0;
    for (let right = 0; right < nums.length; right++) {
        sum = sum + nums[right];
        while (sum >= target) {
            minSubArray = minSubArray > 0 ? Math.min(minSubArray, right - left + 1) : right - left + 1;
            sum = sum - nums[left];
            left++;
        }
    }
    return minSubArray;
}
console.log("Test 1:", minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // Expected: 2
console.log("Test 2:", minSubArrayLen([1, 4, 4], 4)); // Expected: 1
console.log("Test 3:", minSubArrayLen([1, 1, 1, 1, 1, 1], 11)); // Expected: 0
console.log("Test 4:", minSubArrayLen([1, 2, 3, 4, 5], 15)); // Expected: 5
//# sourceMappingURL=006-min-subarray-sum.js.map