/**
 * 875. Koko Eating Bananas (Medium) - Binary Search on Answer
 * 
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.
 * The guards have gone and will come back in h hours.
 * 
 * Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile
 * of bananas and eats k bananas from that pile. If the pile has less than k bananas,
 * she eats all of them instead and will not eat any more bananas during this hour.
 * 
 * Return the minimum integer k such that she can eat all the bananas within h hours.
 * 
 * Example 1:
 *   Input: piles = [3,6,7,11], h = 8
 *   Output: 4
 *   Explanation: At speed 4, Koko eats: ceil(3/4)=1 + ceil(6/4)=2 + ceil(7/4)=2 + ceil(11/4)=3 = 8 hours
 * 
 * Example 2:
 *   Input: piles = [30,11,23,4,20], h = 5
 *   Output: 30
 *   Explanation: At minimum speed 30, each pile takes 1 hour = 5 hours total
 * 
 * Example 3:
 *   Input: piles = [30,11,23,4,20], h = 6
 *   Output: 23
 * 
 * Constraints:
 * - 1 <= piles.length <= 10^4
 * - piles.length <= h <= 10^9
 * - 1 <= piles[i] <= 10^9
 * 
 * Hint: Binary search on the eating speed k (the "answer").
 *       For each candidate speed, check if Koko can finish in time.
 * 
 * Time Complexity Goal: O(n * log(max(piles)))
 * Space Complexity Goal: O(1)
 */

function minEatingSpeed(piles: number[], h: number): number {
    // Your solution here
    return -1;
}

// Helper: Calculate hours needed at speed k
function hoursNeeded(piles: number[], k: number): number {
    let hours = 0;
    for (const pile of piles) {
        hours += Math.ceil(pile / k);
    }
    return hours;
}

// Test cases
console.log("Test 1:", minEatingSpeed([3,6,7,11], 8));
// Expected: 4

console.log("Test 2:", minEatingSpeed([30,11,23,4,20], 5));
// Expected: 30

console.log("Test 3:", minEatingSpeed([30,11,23,4,20], 6));
// Expected: 23

console.log("Test 4:", minEatingSpeed([1,1,1,1], 4));
// Expected: 1

console.log("Test 5:", minEatingSpeed([312884470], 312884469));
// Expected: 2 (edge case with large numbers)

console.log("Test 6:", minEatingSpeed([1000000000], 2));
// Expected: 500000000

