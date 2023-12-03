/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let start = 0, end = k ; 
    
    let sum = 0; 
    let maxSum = 0; 
    for(let i = 0; i < k; i++) { 
        sum += nums[i]
    }
    console.log({sum})
    maxSum = sum 
    
    while(end < nums.length) { 
        sum = sum - nums[start++] + nums[end++]
        console.log(sum)
        if(sum > maxSum) { 
            maxSum = sum
        }
    }
    return maxSum / k 
};