/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0
    
    if(isNegative) x = x * - 1. // make it positive   

    let str = ''
    while(x > 0) { 
        let last = x % 10 
        x = Math.floor( x / 10) 
        str += last.toString()
    }
    
    console.log(str)
    x = Math.abs(str)  // remove zeroes at the front 
    if(!isInRange(x)) return 0
    if(isNegative) x = x * - 1

    return x 
};

function isInRange(x) { 
    return x > Math.pow(-2,31) && x < Math.pow(2,31) - 1 
}