/**
 * @param {string} s
 * @return {number}
   no repeating ch in substring 
   
   init numOfSubString  = 0 
   init seen (obj) // { 'a' : true, 'ba', true }
   
   loop through the string 
     create a variable to hold subString 
   
     if ch is already in the subString 
         track the subString that's already seen 
         increment the numOfSubString 
         
      else if not in the subString 
        add it to the sub string 
        
    return numOfSubString 
 */
var partitionString = function(s) {
    let subStr = ''
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