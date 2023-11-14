/**
 * @param {number} n
 * @return {boolean}
    2 => false 
    1 => true  
    19 => true 
    
    sum = 0 
    hash =  { }
    curNum = n 
    
    2* 2 = 4 
    4*4 = 16 
    6*6 + 1* 1 = 37 
    3*3 + 7 * 7 = 9 + 49 =   58 
    5*5 + 8*8 =   89 
    8*8 + 9 * 9 =   145
    1 + 4*4 + 5*5  = 42
    4*4 + 2*2 = 20
    2 *2 + 0 = 4 
    
    3*3 = 9 
    9 * 9 = 81 
    8 * 8 + 1 = 65 
    6*6 + 5 *5 = 36 + 25 = 61 
    6*6 + 1  = 37 
    3*3 + 7 * 7 = 9 + 49 = 58
    5*5 + 8 *8 = 89 
    8*8 + 9* 9 = 145 
    42 
    20 
    4 
    16 
    37 
    58 
    89 
    
    
    one loop to check sum is equal to 1 
   
   one loop to chop off last digit and keep squaring and adding to sum 
   
    
 */
var isHappy = function(n) {
    let seen = { [n]:true}
     let sum =   reverseSqaureAndAdd(n)
    
     while(sum != 1) { 
         if(seen[sum]) return false 
         seen[sum] = true 
         sum = reverseSqaureAndAdd(sum)
     }
    console.log(sum,seen)
    return true 

};
    
    function reverseSqaureAndAdd(n) {
        let sum = 0 
        while (n > 0) { 
            let last = n % 10
            n = Math.floor( n / 10 ) 
            sum += last * last 
        }
        return sum 
    }

