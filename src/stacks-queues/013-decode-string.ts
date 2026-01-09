import { Stack } from "./stack";

/**
 * 394. Decode String (Medium)
 * 
 * Given an encoded string, return its decoded string.
 * 
 * The encoding rule is: k[encoded_string], where the encoded_string inside
 * the brackets is repeated exactly k times.
 * 
 * You may assume:
 * - The input string is always valid (balanced brackets, valid numbers)
 * - k is a positive integer
 * - There are no extra white spaces
 * - Digits are only for repeat numbers (no digits in the encoded_string itself)
 * 
 * Example 1:
 * Input: "3[a]2[bc]"
 * Output: "aaabcbc"
 * 
 * Example 2:
 * Input: "3[a2[c]]"
 * Output: "accaccacc"
 * Explanation: 2[c] = "cc", so a2[c] = "acc", then 3[acc] = "accaccacc"
 * 
 * Example 3:
 * Input: "2[abc]3[cd]ef"
 * Output: "abcabccdcdcdef"
 * 
 * Example 4:
 * Input: "abc3[cd]xyz"
 * Output: "abccdcdcdxyz"
 */

function decodeString(s: string): string {
    const stack = new Stack<string>();

    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];

        if (char === "[") {
            // Pop until ']' to get the substring inside brackets
            let sub = "";
            while (stack.peek() !== "]") {
                sub += stack.pop();
            }
            stack.pop(); // Remove the ']'
            stack.push(sub); // Push substring back — the number will use it
        } else if (!Number.isNaN(parseInt(char))) {
            // Collect full number (multi-digit support)
            let numStr = char;
            while (i > 0 && !Number.isNaN(parseInt(s[i - 1]))) {
                i--;
                numStr = s[i] + numStr;
            }
            const count = parseInt(numStr);

            // Pop the substring and repeat it
            const subToRepeat = stack.pop() || "";
            stack.push(subToRepeat.repeat(count));
        } else {
            // Regular character or ']'
            stack.push(char);
        }
    }

    // Build result from stack
    let result = "";
    while (stack.peek() !== undefined) {
        result += stack.pop();
    }
    return result;
}

// Test cases
console.log("Test 1:", decodeString("3[a]2[bc]"));
// Expected: "aaabcbc"

console.log("Test 2:", decodeString("3[a2[c]]"));
// Expected: "accaccacc"

console.log("Test 3:", decodeString("2[abc]3[cd]ef"));
// Expected: "abcabccdcdcdef"

console.log("Test 4:", decodeString("abc3[cd]xyz"));
// Expected: "abccdcdcdxyz"

console.log("Test 5:", decodeString("10[a]"));
// Expected: "aaaaaaaaaa" (10 a's)

console.log("Test 6:", decodeString("2[a2[b3[c]]]"));
// Expected: "abcccbcccabcccbccc"

console.log("Test 7:", decodeString("abc"));
// Expected: "abc" (no encoding)

