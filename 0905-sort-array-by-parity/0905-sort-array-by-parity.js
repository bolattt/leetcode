/**
 * @param {number[]} nums
 * @return {number[]}
   
    
 */
var sortArrayByParity = function(nums) {
    let l = 0, r = 0 
    while(r < nums.length){ 
        if(nums[r] % 2 == 0) {  // is r is even
            [nums[l],nums[r]] = [nums[r],nums[l]]
            l++
        }
        r++
    }
    return nums 
};