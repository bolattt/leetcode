/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const obj = {}
    for(let ch of ransomNote) { 
        obj[ch] = (obj[ch] || 0) + 1
    }
    for(let ch of magazine) { 
        obj[ch] = (obj[ch] || 0 ) - 1 
    }
    for(let key in obj) { 
        if(obj[key] > 0) { 
            console.log(key, obj[key])
            return false 
        }
    }
        return true 
};
