/**
 * @param {number[]} nums
 * @return {number}
 
    if it's sorted, first arr el is less than last el 
        return 1st el
        
    if first el is greater than last el, it's rotated 
        move the last index until last el is greater is 1st el 
    
    at the end of the loop, last will be at the max el index 
    retunr last el + 1 (where min is )
    
 */
var findMin = function(nums) {
    if(nums.length == 1) return nums[0]
    let first = 0; 
    let last = nums.length - 1 
    
    if(nums[first] < nums[last]) return nums[first]
    
    while(nums[last]  < nums[first]) { 
        last-- 
    }
    return nums[last + 1]
};

