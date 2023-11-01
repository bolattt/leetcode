/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let startIndex = 0
    let endIndex =  nums.length -1 
    
    if( target > nums[endIndex])  return - 1 
    
    while(startIndex <= endIndex ) { 
        const midIndex = Math.floor((startIndex + endIndex) / 2) 
        
        if(target == nums[midIndex]) {  
            return midIndex 
        } else if(target < nums[midIndex]) { 
            endIndex = midIndex - 1 
        } else { 
            startIndex = midIndex + 1 
        }
    }
    
    return - 1; 
     
};

