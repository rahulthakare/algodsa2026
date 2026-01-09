import { Stack } from "./stack";

function dailyTempreture(temps: number[]): number[] {
    let result = new Array(temps.length).fill(0);
    let stack = new Stack<number>();

    for(let i= temps.length -1 ; i >= 0; i--) {
        
        const ele = temps[i];
        while(stack.peek() !== undefined && temps[stack.peek()] <= ele) {
            stack.pop();
        }
        if (i === temps.length -1) {
            result[i] = 0;
        } else {
            result[i] = stack.peek() !== undefined ? (stack.peek() - i) : 0;
        }
        stack.push(i);
    }
    return result;
}

console.log("Test 1:", dailyTempreture([73,74,75,71,69,72,76,73]));
// Expected: [1,1,4,2,1,1,0,0]

console.log("Test 2:", dailyTempreture([30,40,50,60]));
// Expected: [1,1,1,0] - strictly increasing

console.log("Test 3:", dailyTempreture([60,50,40,30]));
// Expected: [0,0,0,0] - strictly decreasing

console.log("Test 4:", dailyTempreture([50,50,50,50]));
// Expected: [0,0,0,0] - all same temps

console.log("Test 5:", dailyTempreture([70]));
// Expected: [0] - single element

console.log("Test 6:", dailyTempreture([70,80]));
// Expected: [1,0] - two elements, warmer next day

console.log("Test 7:", dailyTempreture([80,70]));
// Expected: [0,0] - two elements, colder next day
