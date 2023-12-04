/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    const tHash = { }
    for(let i = 0; i < target.length; i++) { 
        let ch = target[i]
        tHash[ch] = (tHash[ch] || 0) + 1 
    } 
    console.log('tHash',tHash)
    const sHash = { }
    for(let i = 0; i < s.length; i++) { 
        let ch = s[i]
        if(tHash[ch]) { 
             sHash[ch] = (sHash[ch] || 0 ) + 1 
        }    
    }
    
  
    console.log(sHash) 
    console.log(tHash)
    let count = 0; 
    let done = false
    while(done == false) { 
        for(let key in tHash){
            if(sHash[key] >= tHash[key]) { 
                sHash[key] = sHash[key] - tHash[key] 
            } else { 
               return count
            }
     
        } 
            count++
    } 
    return count
};