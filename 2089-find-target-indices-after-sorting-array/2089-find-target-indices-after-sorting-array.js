/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((a,b) => a - b)
  
    let left = 0;
    let mid; 
    let right = nums.length - 1;
    const ans = []


    while (left <= right) { 
        mid = Math.floor( (left + right) / 2)
        const midVal = nums[mid]
        
        if(midVal == target) { 
            right = mid -1 
        } else if(midVal < target) { 
            left = mid + 1
        } else { 
            right = mid - 1 
        }
    }
    
    while(nums[left] == target) { 
        ans.push(left)
        left++;
    }
    return ans 
};