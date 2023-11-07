/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
 let alphabets =  {}
  for(let ch of magazine) { 
    alphabets[ch] = (alphabets[ch]  || 0) + 1 
  }
    
  for(let ch of ransomNote)  { 
     alphabets[ch] = (alphabets[ch]  || 0 ) - 1 
      if(alphabets[ch] < 0) return false 
      
 }
    return true 
};
