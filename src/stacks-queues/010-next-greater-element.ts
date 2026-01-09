import { Stack } from "./stack";



function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    // Your solution here
    let stack = new Stack<number>();
    let map = new Map<number, number>();
    let result:number[] = []
    for (let i = nums2.length -1 ; i>=0; i--) {
        const ele = nums2[i];
        if(i === nums2.length -1 ) {
            map.set(nums2[i], -1);
        }
        while(stack.peek() !== undefined && stack.peek() <= nums2[i]) {
            stack.pop();
        }
        if (stack.peek() !== undefined) {
            map.set(nums2[i], stack.peek());
        }
        stack.push(nums2[i]);
    }
    for (let i=0; i<nums1.length; i++) {
        result.push(map.get(nums1[i]) || -1);
    }
    return result;
}

// Test cases
console.log("Test 1:", nextGreaterElement([4,1,2], [1,3,4,2]));
// Expected: [-1,3,-1]

console.log("Test 2:", nextGreaterElement([2,4], [1,2,3,4]));
// Expected: [3,-1]

console.log("Test 3:", nextGreaterElement([1,3,5,2,4], [6,5,4,3,2,1,7]));
// Expected: [7,7,7,7,7]

console.log("Test 4:", nextGreaterElement([2], [2]));
// Expected: [-1]

console.log("Test 5:", nextGreaterElement([1,2,3], [3,2,1]));
// Expected: [-1,-1,-1]

