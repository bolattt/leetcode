/**
 * @param {number[]} nums
 * @return {number[]}
    idx 3 , sum of all el before it 
    
    sum = 0
    nums = [1,2,3,4]
    loop through the arry 
        add cur el to sum 
        cur el becomes sum 
    return arr
 */
var runningSum = function(nums) {
    let sum = 0 
    for(let i = 0; i < nums.length; i++){ 
        let cur = nums[i] 
        sum += cur 
        nums[i] = sum 
    }
    return nums 
};