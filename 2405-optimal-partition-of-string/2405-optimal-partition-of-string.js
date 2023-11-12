/**
 * @param {string} s
 * @return {number}
   no repeating ch in substring 
    
 */
var partitionString = function(s) {
    let seen = {}
    let count = 1
    
    for(let i =0 ; i< s.length; i++) { 
        let ch = s[i]
        if(!seen[ch]) { 
            seen[ch] = true
        } else { 
            count++
            i--
            seen = {}
        }
    }
    return count 
};