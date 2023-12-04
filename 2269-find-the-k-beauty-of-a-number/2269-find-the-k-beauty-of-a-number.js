/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let str = num.toString(); 
    let left = 0, sub = '',count = 0; 
     for(let right = 0; right < str.length; right++) { 
        sub += str[right] 
        console.log(sub)
        if( right - left  + 1 === k) { 
            let subNum = Number(sub)
            console.log(subNum)
            let isDivisor = num % subNum == 0 
            if(isDivisor) { 
                count++
            }
            sub = sub.slice(1)
            left++;
        }
    }
    return count 
};

/* 

 
*/