/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    // one pass to count num of target after key 
    // obj to hold count, key is target , val is count 
    const count = {}
    let maxCount = 0; 
    let maxNum
    
    for(let i =0; i< nums.length;i++) { 
        const cur = nums[i]
        if(cur == key) { 
            const target = nums[i+1]
            count[target] = (count[target] || 0) + 1
            if(count[target] > maxCount) { 
                maxCount = count[target]
                maxNum = target
            }
        }
        
    }
    return maxNum
};