"use strict";
function threeSum(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    let results = [];
    let seen = new Set();
    for (let i = 0; i < sortedNums.length - 2; i++) {
        let left = i + 1;
        let right = sortedNums.length - 1;
        while (left < right) {
            const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
            if (sum === 0) {
                if (!seen.has(`${sortedNums[i]},${sortedNums[left]},${sortedNums[right]}`)) {
                    results.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                }
                seen.add(`${sortedNums[i]},${sortedNums[left]},${sortedNums[right]}`);
                left++;
                right--;
            }
            else if (sum < 0) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    return results;
}
// ============ TEST Cconst sum = ASES ============
console.log("Test 1:", threeSum([-1, 0, 1, 2, -1, -4]));
console.log("Test 2:", threeSum([0, 1, 1]));
console.log("Test 3:", threeSum([0, 0, 0]));
//# sourceMappingURL=002-three-sum.js.map