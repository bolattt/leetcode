/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = ''
    // one pass to remove lower case and remove non alpha 
  for(let i = 0; i < s.length;i++) { 
      let ch = s[i].toLowerCase();
      let reg = /[a-z0-9]/
    if(reg.test(ch)) { 
        str += ch
    }
  }
    console.log(str)
   // another pass with two pointers to check if it's palindrome 
   let i = 0, j = str.length -1
   while(i < j) { 
     if(str[i] != str[j]) return false 
       i++
       j--
   }
    
    return true 
};
