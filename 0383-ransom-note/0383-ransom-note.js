/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
 let alphabets =  new Array(26)
  for(let ch of magazine) { 
    const index = ch.charCodeAt() - 97  
    alphabets[index] = (alphabets[index] || 0)  + 1 
  }
    
  for(let ch of ransomNote)  { 
     const index = ch.charCodeAt() - 97  
     alphabets[index] = ( alphabets[index] || 0) - 1
     if(alphabets[index] < 0) return false
      
 }
    return true 
};
