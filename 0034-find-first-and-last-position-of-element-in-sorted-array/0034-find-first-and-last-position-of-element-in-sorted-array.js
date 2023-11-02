/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0
    let right = nums.length - 1 
    let ans = []
    let found = false 
    
    while(left <= right) { 
        const mid = Math.floor((left + right) / 2)
        const midVal = nums[mid]
        
        if(midVal === target) { 
            right = mid - 1   
            found = true 
        }
        else if(midVal < target) left = mid + 1 
        else right = mid - 1

    }
    
    if(!found) return [ -1, -1 ]
    
    ans[0] = left
    
    while(nums[left] == target) { 
        left++
    }
    
    ans[1] = left - 1 
    
    return ans
};

