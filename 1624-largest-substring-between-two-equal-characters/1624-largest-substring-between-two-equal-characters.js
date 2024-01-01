/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let chMap = new Map() 
    let subStr = -1
    let longest = -1
  
    for(let i = 0; i < s.length; i++) { 
        let cur = s[i]
        if(!chMap.has(cur)) { 
            chMap.set(cur,i)
        } else { 
            let diff = i - chMap.get(cur) - 1
            if(diff > longest) longest = diff
        }
    }
    console.log(chMap)
    return longest
};