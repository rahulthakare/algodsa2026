
function findMaxAverage(nums: number[], k: number) {

    let left = 0;
    let right = k;
    let sum = calculateSum(nums, k);
    let maxAverage = sum / k;

    while(right < nums.length -1) {
        sum = sum - nums[left] + nums[right];
        maxAverage = Math.max(maxAverage, sum / k);
        left++;
        right++;
    
    }
    
    return maxAverage

}

function calculateSum(nums: number[], k: number) {
    let sum = 0;
    for (let i=0; i<k; i++) {
        sum = sum + nums[i]
    }
    return sum;
}

console.log("Test 1:", findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log("Test 2:", findMaxAverage([5], 1));
console.log("Test 3:", findMaxAverage([0, 4, 0, 3, 2], 1));
console.log("Test 4:", findMaxAverage([-1, -2, -3, -4], 2));
