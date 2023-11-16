/**
 * @param {number[]} nums
 * @return {number[]}
    loop through the arry 
        
        do it in O(1) space 
        [3,1,2,4,5,6,7]
         l           r   
        loop through the arr, while left is less than right 
            if left is odd && right is even 
                swap 
                 l++, r-- 
            if left is odd && right is odd 
                move right -- 
                when right is even, 
                    swap 
                l++, r-- 
                
    
                
    
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