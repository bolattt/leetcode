/**
 * @param {number} n
 * @return {boolean}
 
    get prime factors 
    if prime factors are all 2,3 or 5 return true
    otherwise return false  
    
    how to get prime factors 
        divide by 2,3 and 5  until no longer can 
        n = 6 
        n = 3 , factors = 2 
        n = 1 , factors = 2,3
        return true  
    
        n = 10 ,  n / 2
        n = 5, factors = 2 
        n = 1, factors = 2,5 
        return true 
        
        n = 12  
        n = 6, factors = 2 
        n = 2, factors = 2,3
        n = 1, factors = 2,3,2 
        return true 
        
        n = 14 
        n = 7, f = 2 
        n = 1, f = 2,7 
        return false 
        
        n = 1 
        n = 1, f = 0

        n = 120 
        n = 60 , f = 2
        n = 30 , f = 2,2
        n = 15 , f = 2,2,2
        n = 5 , f = 2,2,2,3 
        n = 1 , f = 2,2,2,3,5
 */
var isUgly = function(n) {
    if(n < 1) return false 
    if(n == 1) return true 

    while(n != 1) { 
        if(n % 2 == 0)  n = n / 2
        else if (n % 3 == 0) n = n / 3 
        else if (n % 5 == 0) n = n / 5 
        else return false
    }
  return true 
};

