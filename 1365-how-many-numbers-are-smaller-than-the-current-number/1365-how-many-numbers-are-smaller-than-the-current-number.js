/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // after sorting, index will be the num of smaller nums, ignore same items
    const sorted = [...nums].sort((a,b) => a-b)
    // [8,1,2,2,3]
    // [1,2,3,3,8]
    
    // key is num, value is number of items smaller than num
    const countMap = new Map();
    const ans = [] 
    
    // one pass to count num of items smaller than cur num 
    for(let i = 0; i < nums.length; i++) { 
        const num = sorted[i]
       if(!countMap.has(num)) { 
            countMap.set(num,i)
       }
    }
    
    // another pass to push num of smaller items to array
    // need 2 passes coz input array is not sorted
    console.log(countMap)
    for(let i = 0; i < nums.length; i++) { 
        ans.push(countMap.get(nums[i]))
    }
 
    return ans
    
};