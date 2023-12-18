/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
    loop through the nums 
        if it's less than k, 
 */
var minOperations = function(nums, k) {
    const seen = new Set(); 
    let operations = 0
    
    while(nums.length >= 1) {
        operations++
        seen.add(nums.pop())
       
        let done = true
        for(let i = 1; i <= k; i++) { 
            if(!seen.has(i)) { 
                done = false
                break
            }
        }
        if(done) return operations 
    }   
};

