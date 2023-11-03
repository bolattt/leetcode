/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
*/


var isAnagram= function(s, t) {
    if(s.length !== t.length) return false 
    const count = { }
    for(let i=0; i< s.length; i++) {
        let sch = s[i]
        let tch = t[i] 
        count[sch] = (count[sch] || 0 )  + 1 ;
        count[tch] = (count[tch] || 0 ) - 1;
    }
    for(let key in count) { 
        if(count[key] !== 0) {
            return false
        }
    }
    return true 
   
};
