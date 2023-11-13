/**
 * @param {number} num
 * @return {number}

    
 */
var addDigits = function(num) {
    if(num < 9 ) return num 
    
    let sum = 0 
    
    while(num > 9 ) {
          let lastDigit = num % 10 
          num = Math.floor(num / 10) 
          sum += lastDigit
        
        if(num < 10){ 
            sum += num 
            num = sum 
            sum = 0 
        }                     
    }
    return num 
};

