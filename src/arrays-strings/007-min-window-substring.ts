function minWindowSubstring(s: string, t: string): string {
    let minSubArr = "";
     const mapT = new Map<string, number>();
     const resultMap = new Map<string, number>();
     let required=0;
     let left =0;
     let satisfied=0;
     for (let i = 0; i< t.length; i++) {
        const char = t[i];
        if(mapT.get(char) == undefined) {
            required++
        }
        mapT.set(char, (mapT.get(char) ?? 0) + 1 );
        
     }
    
    
    for (let right=0; right<s.length; right++) {
        const char = s[right];
        resultMap.set(char, (resultMap.get(char) ?? 0) +1);

        if (mapT.get(char) !== undefined && resultMap.get(char) === mapT.get(char)) {
            satisfied++;
        }
        while(satisfied === required) {

            const subArr =  s.substring(left, right + 1);
            console.log("subArr", subArr);
            minSubArr = minSubArr.length == 0 || subArr.length < minSubArr.length ? subArr : minSubArr;
            console.log("minSubArr", minSubArr);
            
            
            if(mapT.get(s[left]) !== undefined && resultMap.get(s[left]) === mapT.get(s[left])) {
                satisfied--;
            }
            console.log("satisfied", satisfied);
            
            resultMap.set(s[left], (resultMap.get(s[left]) ?? 0) -1);
            left++;
            
        }

    }


    return minSubArr;
}


console.log("Test 1:", minWindowSubstring("ADOBECODEBANC", "ABC"));
console.log("Test 2:", minWindowSubstring("a", "a"));
console.log("Test 3:", minWindowSubstring("a", "aa"));
console.log("Test 4:", minWindowSubstring("ab", "a"));
console.log("Test 5:", minWindowSubstring("ab", "b"));
console.log("Test 6:", minWindowSubstring("ab", "ab"));
console.log("Test 7:", minWindowSubstring("ab", "ba"));
console.log("Test 8:", minWindowSubstring("ab", "abc"));
console.log("Test 9:", minWindowSubstring("ab", "acb"));
console.log("Test 10:", minWindowSubstring("ab", "bac"));