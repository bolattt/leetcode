/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let chMap = new Map() 
    let longestSubStr = -1
  
    for(let i = 0; i < s.length; i++) { 
        let cur = s[i]
        if(!chMap.has(cur)) { 
            chMap.set(cur,i)
        } else { 
            let curSubStr = i - chMap.get(cur) - 1
            if(curSubStr > longestSubStr) longestSubStr = curSubStr
        }
    }
    return longestSubStr
};