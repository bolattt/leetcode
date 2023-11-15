/**
 * @param {number[]} nums
 * @return {number[]}
    [1,2,3,4] 
    
    to solve in O(n) 
    
    one pass to get the products to the left of num[i]
    another pass to get products to the right of nums[i]
    n = [1,2,3,4] 
    left =   [1, 1, 2, 6]
    right = [24,12,4,1]
    
    another pass to multiply left[i] and right[i]
    and update num[i]
    
    [3,4,5,6]
    [1,3,12,60]
    
    
    
 */
var productExceptSelf = function(nums) {
   let left = [1,nums[0]]
   let total = 1 
   for(let i = 2; i< nums.length;i++) { 
        let copyEl = nums[i]
        left[i] = left[i - 1] * nums[i -1]
   }
   console.log(left)
    // let right = [ nums[nums.length -1] ,1]
    let right = Array(nums.length )
    right[right.length - 1] = 1 
    right[right.length - 2] = nums[nums.length - 1 ]
    for(let i = nums.length - 3; i >= 0; i-- ) { 
        right[i] = right[i + 1] * nums[i + 1]
    }
    console.log(right)
    
    for(let i = 0; i< nums.length;i++) { 
        nums[i] = left[i] * right[i]
    }
    return nums 
 };





