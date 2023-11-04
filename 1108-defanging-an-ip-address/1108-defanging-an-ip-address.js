/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let ans = ''
    for(let ch of address) { 
        if(ch == '.') { 
            ans += '[.]'
        } else { 
            ans += ch
        }
    }
    
    return ans 
};