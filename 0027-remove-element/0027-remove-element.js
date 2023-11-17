/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
    put elements != val, to the left of p 
  
 */
var removeElement = function(nums, val) {
    let p = 0, i = 0; 
    while( i < nums.length) { 
        if(nums[i] != val) { 
            [nums[i],nums[p]] = [ nums[p],nums[i] ]
            p++
        }
        i++ 
    }

  return p
}

