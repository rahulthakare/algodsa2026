import { Stack } from "./stack";

/**
 * 150. Evaluate Reverse Polish Notation (Medium)
 * 
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation (RPN).
 * 
 * Valid operators are +, -, *, /
 * Each operand may be an integer or another expression.
 * Division truncates toward zero.
 * 
 * RPN (Postfix notation): operators come AFTER their operands
 *   - "3 4 +" means 3 + 4 = 7
 *   - "3 4 2 * +" means 3 + (4 * 2) = 11
 * 
 * Example 1:
 * Input: ["2","1","+","3","*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 * 
 * Example 2:
 * Input: ["4","13","5","/","+"]
 * Output: 6
 * Explanation: (4 + (13 / 5)) = 4 + 2 = 6
 * 
 * Example 3:
 * Input: ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
 * Output: 22
 */

function evalRPN(tokens: string[]): number {
    // Your solution here
    let stackNum = new Stack<string>();

    for (let i=0; i< tokens.length; i++) {
        const token = tokens[i];
        if (!Number.isNaN(parseInt(token))) {
            stackNum.push(token);
        } else {
            const ele1 = stackNum.pop();
            const ele2 = stackNum.pop();
            const res = eval (ele2 + token + ele1);
            stackNum.push(Math.trunc(res).toString() as string);
        }
    }
    return parseInt(stackNum.pop()?? "0");
}

// Test cases
console.log("Test 1:", evalRPN(["2","1","+","3","*"]));
// Expected: 9

console.log("Test 2:", evalRPN(["4","13","5","/","+"]));
// Expected: 6

console.log("Test 3:", evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
// Expected: 22

console.log("Test 4:", evalRPN(["3","4","+"]));
// Expected: 7

console.log("Test 5:", evalRPN(["5","1","2","+","4","*","+","3","-"]));
// Expected: 14  (5 + ((1+2)*4) - 3 = 5 + 12 - 3 = 14)

console.log("Test 6:", evalRPN(["42"]));
// Expected: 42 (single number)

console.log("Test 7:", evalRPN(["6","3","/"]));
// Expected: 2

console.log("Test 8:", evalRPN(["-6","3","/"]));
// Expected: -2 (negative division)

