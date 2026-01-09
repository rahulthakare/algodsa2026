/**
 * 239. Sliding Window Maximum (Hard)
 * 
 * You are given an array of integers nums and a sliding window of size k
 * which moves from the left to the right. You can only see the k numbers
 * in the window. The window moves right by one position each time.
 * 
 * Return an array of the maximum value in each window.
 * 
 * Example 1:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 * 
 * Explanation:
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 *  1 [3  -1  -3] 5  3  6  7       3
 *  1  3 [-1  -3  5] 3  6  7       5
 *  1  3  -1 [-3  5  3] 6  7       5
 *  1  3  -1  -3 [5  3  6] 7       6
 *  1  3  -1  -3  5 [3  6  7]      7
 * 
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 * Example 3:
 * Input: nums = [9,11], k = 2
 * Output: [11]
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 * - 1 <= k <= nums.length
 * 
 * Hint: Use a deque (double-ended queue) to store indices.
 * Keep the deque in decreasing order of values — the front
 * always holds the index of the maximum for the current window.
 * 
 * Time Complexity Goal: O(n)
 * Space Complexity Goal: O(k)
 */
import {Deque} from './deque'

function maxSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    const deque = new Deque<number>();

    for (let i=0; i< nums.length; i++) {
        const ele = nums[i];

        if(deque.peek() !== undefined && deque.peekFront() < i - k + 1) {
            deque.popFront();
        }

        while(deque.peek() !== undefined && nums[deque.peek()] < ele ) {
            deque.pop();
        }

        deque.push(i)

        if (i >= k -1) {
            result.push(nums[deque.peekFront()])
        }
    }
    return result;
}

// Test cases
console.log("Test 1:", maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
// Expected: [3,3,5,5,6,7]

console.log("Test 2:", maxSlidingWindow([1], 1));
// Expected: [1]

console.log("Test 3:", maxSlidingWindow([9,11], 2));
// Expected: [11]

console.log("Test 4:", maxSlidingWindow([4,3,2,1], 2));
// Expected: [4,3,2]

console.log("Test 5:", maxSlidingWindow([1,2,3,4], 2));
// Expected: [2,3,4]

console.log("Test 6:", maxSlidingWindow([7,2,4], 2));
// Expected: [7,4]
