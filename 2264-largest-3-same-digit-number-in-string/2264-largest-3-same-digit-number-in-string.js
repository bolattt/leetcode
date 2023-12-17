/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let max = ''
    for(let i = 0; i < num.length - 2; i++) { 
        let first = num[i], second = num[i+1], third = num[i+2]
        if(first == second && second == third ) { 
            if(max < first) max = first
        }
    }
    return max.repeat(3)
};