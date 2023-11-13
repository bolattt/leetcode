/**
 * @param {number} num
 * @return {number}

    
 */
var addDigits = function(num) {
    while (num > 9) { 
            let arr = num.toString().split('')
            num =    arr.reduce((a,b) => Number(a) + Number(b))
    }
    return num 
};