"use strict";
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, area);
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxArea;
}
// ============ TEST CASES ============
console.log("Test 1:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log("Test 2:", maxArea([1, 1]));
console.log("Test 3:", maxArea([4, 3, 2, 1, 4]));
console.log("Test 4:", maxArea([1, 2, 1]));
console.log("Test 5:", maxArea([1, 2, 4, 3]));
console.log("Test 6:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log("Test 7:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
//# sourceMappingURL=003-container-water.js.map