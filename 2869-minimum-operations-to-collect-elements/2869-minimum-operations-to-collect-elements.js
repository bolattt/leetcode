/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
    loop through the nums 
        if it's less than k, 
 */
var minOperations = function(nums, k) {
    const res = []
    const numSet = new Set(); 
    let operations = 0
    while(nums.length >= 1) { 
        console.log('nums',nums)
      numSet.add(nums.pop())
        operations++
     console.log(numSet)
        
      let missing = false
      for(let i = 1; i <= k; i++) { 
        if(!numSet.has(i)) { 
            missing = true
            break
        }
      }
        
       if(missing == false) { 
        return operations
       } 
    }
    
};

