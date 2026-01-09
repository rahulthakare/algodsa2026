import { Stack } from "./stack";

function validParanthesis(str: string): boolean {
    let result: boolean = false;
    let stack = new Stack<string>();
    let bMap = new Map<string, string>();
    bMap.set("{", "}");
    bMap.set("(", ")");
    bMap.set("[", "]");
    if (str.length === 0) return true;

    for (let i=0; i<str.length; i++) {
        const char = str[i];

       if(bMap.has(char)) { // Its a opening braces
         stack.push(char)
       } else { // Its a closing braces
         const braces = stack.pop() as string;
         if (bMap.get(braces) !== char) {
            return false;
         }
       }
    }

    return stack.peek() === undefined;
} 

console.log("Test 1:", validParanthesis("()"));
console.log("Test 2:", validParanthesis("()[]{}"));
console.log("Test 3:", validParanthesis("(]"));
console.log("Test 4:", validParanthesis("([)]"));
console.log("Test 5:", validParanthesis("{[]}"));