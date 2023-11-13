/**
 * @param {number} num
 * @return {number}
 123   num = 12 , l = 3 , sum 3 
        num = 1, l = 2 , sum 5 
            
      for each round chop off last digit from num
      add it to sum  
      
      when num is single digit, add it to sum 
      set num to sum, to keep the loop going   num = 11 
      reset sum for next iterations 
 */
var addDigits = function(num) {
    
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

