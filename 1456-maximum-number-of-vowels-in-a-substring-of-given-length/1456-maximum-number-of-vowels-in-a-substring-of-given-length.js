/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = new Set('aeiou')
    console.log(vowels)
    // left = 0, sub = '' 
    
    // for loop 
    let left = 0, subStr = '', maxVowels = 0, curVowels = 0 
    for(let right = 0; right < s.length; right++) { 
        let cur = s[right]
        if(vowels.has(cur)) { 
            curVowels++
        }
        subStr += s[right] 
        
        if(right - left + 1 === k) { 
            if(curVowels > maxVowels) { 
                maxVowels = curVowels
            }
            if(vowels.has(s[left])) { 
                curVowels--
            }
            left++
        }
        
    }
    return maxVowels
};