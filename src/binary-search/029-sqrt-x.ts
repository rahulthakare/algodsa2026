/**
 * 69. Sqrt(x) (Easy) - Binary Search on Answer
 * 
 * Given a non-negative integer x, return the square root of x rounded down
 * to the nearest integer. The returned integer should be non-negative as well.
 * 
 * You must not use any built-in exponent function or operator (like pow or **).
 * 
 * Example 1:
 *   Input: x = 4
 *   Output: 2
 *   Explanation: The square root of 4 is 2, so we return 2.
 * 
 * Example 2:
 *   Input: x = 8
 *   Output: 2
 *   Explanation: The square root of 8 is 2.82842..., rounded down = 2.
 * 
 * Example 3:
 *   Input: x = 0
 *   Output: 0
 * 
 * 
 * Time Complexity Goal: O(log x)
 * Space Complexity Goal: O(1)
 */

function mySqrt(x: number): number {
    // Your solution here

    let start = 0;
    let end = x;
    let result =0;
    while (start <= end) {
       let mid = Math.floor((start + end)/2);
        
       if(mid * mid <= x) {
        start = mid + 1;
        result = mid;
       } else {
        end = mid -1
       }

    }
    return result;
}

// Test cases
console.log("Test 1:", mySqrt(4));
// Expected: 2

console.log("Test 2:", mySqrt(8));
// Expected: 2

console.log("Test 3:", mySqrt(0));
// Expected: 0

console.log("Test 4:", mySqrt(1));
// Expected: 1

console.log("Test 5:", mySqrt(16));
// Expected: 4

console.log("Test 6:", mySqrt(99));
// Expected: 9

console.log("Test 7:", mySqrt(100));
// Expected: 10

console.log("Test 8:", mySqrt(2147395599));
// Expected: 46339 (large number edge case)

