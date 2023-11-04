/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0; 
    let seen = { };
    for(let num of nums) { 
        if(!seen[num]) seen[num] = 1 
        else { 
            count += seen[num]
            seen[num]++;
        }
    }
    return count 
};

