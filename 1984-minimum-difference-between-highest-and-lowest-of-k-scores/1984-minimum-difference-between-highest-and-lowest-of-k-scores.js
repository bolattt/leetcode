/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 [9,4,1,7,8,5,10] ,  k = 3 
 [1,4,5,7,8,9,10] , k = 3 
  sort the nums in ascending order 
  In subArr of size k, left points at min val, right points at maxVal, elments in between don't matter
  get the diff of max and min , update minDiff 
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

