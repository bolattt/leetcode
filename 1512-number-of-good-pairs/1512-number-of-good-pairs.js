/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0; 
    const hash = new Map()
    for(let num of nums) { 
      if(!hash.has(num)) { 
         hash.set(num,1) 
      }
      else { 
          count += hash.get(num)
          hash.set(num, hash.get(num) + 1 ) 
        }
    }
    return count 
};

