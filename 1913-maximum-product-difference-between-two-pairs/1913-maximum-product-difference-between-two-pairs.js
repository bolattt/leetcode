/**
 * @param {number[]} nums
 * @return {number}
   get the max product diff between two pairs 
   
   get the highest 2, get the lowest 2 
        loop through nums
        
   multiply high 2 - multiply low 2 
   
   
 */
var maxProductDifference = function(nums) {
    let high1 = 0, high2 = 0, low1 = 10001, low2 = 10001
    for(let num of nums) { 
        if(num > high1)  { 
            high2 = high1
            high1 = num 
        } else if(num > high2) { 
            high2 = num 
        }
     
        
        if(num < low1) { 
            low2 = low1
            low1 = num 
        } else if(num < low2) { 
            low2 = num 
        }
        
         console.log({num,high1,high2,low1,low2})
    }
    
    console.log(high1,high2,low1,low2)
    return high1 * high2 - low1 * low2
};