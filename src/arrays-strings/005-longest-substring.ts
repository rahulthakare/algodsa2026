function longestStart(str: string): number {
    // Edge case: empty string
    if (str.length === 0) return 0;
    
    let result = 0;
    let left = 0;
    let seen = new Map<string, number>();  // char -> last index
    
    for (let right = 0; right < str.length; right++) {
        const char = str[right];
        
        // Check if char is a duplicate IN THE CURRENT WINDOW
        // (it must exist in map AND its index must be >= left)
        if (seen.has(char) && seen.get(char)! >= left) {
            // Move left pointer past the previous occurrence
            left = seen.get(char)! + 1;
        }
        
        // Update the character's latest position
        seen.set(char, right);
        
        // Calculate max length (window is valid at this point)
        result = Math.max(result, right - left + 1);
    }
    
    return result;
}

// ============ TEST CASES ============
console.log("Test 1:", longestStart("abcabcbb"));  // Expected: 3
console.log("Test 2:", longestStart("bbbbb"));     // Expected: 1
console.log("Test 3:", longestStart("pwwkew"));    // Expected: 3
console.log("Test 4:", longestStart(""));          // Expected: 0
console.log("Test 5:", longestStart("abcdef"));    // Expected: 6
