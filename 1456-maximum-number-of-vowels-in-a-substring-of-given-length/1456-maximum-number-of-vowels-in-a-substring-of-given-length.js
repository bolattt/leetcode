/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = new Set('aeiou')

    let left = 0, maxVowels = 0, curVowels = 0 
    for(let right = 0; right < s.length; right++) { 
        let cur = s[right]
        if(vowels.has(cur)) { 
            curVowels++
        }
        
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