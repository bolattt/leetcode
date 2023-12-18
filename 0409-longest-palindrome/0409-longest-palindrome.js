/**
 * @param {string} s
 * @return {number}

"bananas" => 
 */
var longestPalindrome = function(s) {
    const chCount = { }
    let length = 0 
    let hasOdd = false
    
    for(let ch of s) { 
        chCount[ch] = (chCount[ch] || 0) + 1 
    }

    for(let key in chCount) { 
        let val = chCount[key]
        if(val % 2 == 0) length += val 
        else { 
            hasOdd = true 
            length += val - 1
        }
    }
    
    if(hasOdd) length++
    return length 
};