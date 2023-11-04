/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sorted = [...nums].sort((a,b) => a-b)
    // [8,1,2,2,3]
    // [1,2,3,3,8]
    const obj = { }
    for(let i = 0; i < nums.length; i++) { 
        const val = sorted[i]
        if(obj[val] == undefined )  { 
            obj[val] = i 
        }
    }
    
    const ans = []
    for(let i = 0; i < nums.length; i++) { 
        ans.push(obj[nums[i]])
    }
 
    return ans
    
};