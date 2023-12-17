/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
  get sum of lengths of all good strings
  good strings if it can be formed by characters from chars
  
  ["cat","bt","hat","tree"] => 'cat' + 'hat' =>  6 
  
  var length to store length of good words 
  
 1. store ch count of chars input 
  loop through input chars, count ch 
  
 2. obj to store ch count 
  loop through the words array 
    count ch of each word 
    
 3.check if it can be formed from chars 
    compare the value of two objects 
    if it can be formed, 
        get the length of the word, increment the length var 
        
    return length 
    
 */
var countCharacters = function(words, chars) {
    let length = 0; 
    
    // 1. 
    const charsCount = { } 
    for(let ch of chars) { 
        charsCount[ch] = (charsCount[ch] || 0) + 1 
    }
     
    // 2.     
    for(let word of words) { 
        const wordChCount = { }
        for(let ch of word) { 
            wordChCount[ch] = (wordChCount[ch] || 0) + 1 
        }

        // 3. 
        let canBeFormed = true
        for(let key in wordChCount) { 
            if(charsCount[key] == undefined || charsCount[key] < wordChCount[key]) {
                canBeFormed = false
                break
            }      
        }
        
        if(canBeFormed) { 
             length += word.length
        }
 
    }
    
    return length 
     
};