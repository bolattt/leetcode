/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 [9,4,1,7,6], k = 3
 */
var minimumDifference = function(nums, k) {
    nums.sort((a,b) => a-b) 
    
    let left = 0, minDiff = Infinity
    for(let right = k - 1; right < nums.length; right++) { 
           let diff = nums[right] - nums[left] 
           minDiff = Math.min(minDiff, diff)
            left++         
    }
    return minDiff
};

// [9,4,1,7,8,5,10] ,  k = 3 
// [1,4,5,7,8,9,10] , k = 3 