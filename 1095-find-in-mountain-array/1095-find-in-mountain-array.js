/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let left = 0, right = mountainArr.length() - 1;
    let peakIndex; 
    
    // get the peak 
    while(left <= right) { 
        const mid = Math.floor((left + right) / 2 ) 
        const midVal = mountainArr.get(mid)
  
        if(midVal < mountainArr.get(mid -1)) { 
            right = mid - 1; 
        } else { 
            left = mid + 1 
        }
    }     
    // right is peak index 
    peakIndex = right 
    console.log({left,right})
    
    // get target index on the left of peak 
    left = 0; 
    while(left <= right) { 
        const mid = Math.floor((left + right) / 2 ) 
        const midVal = mountainArr.get(mid) 
        
        if(midVal == target) return mid 
        else if(midVal < target) left = mid + 1 
        else right = mid - 1 
    }
    console.log({right})
    
    left = peakIndex 
    right = right = mountainArr.length() - 1
        while(left <= right) { 
        const mid = Math.floor((left + right) / 2 ) 
        const midVal = mountainArr.get(mid) 
        
        if(midVal == target) return mid 
        else if(midVal < target) right = mid - 1 
        else left = mid + 1 
    }
    return -1 
};

// [1,2,3,4,5,4,3,2,1] 
// left 0, right 6, mid 3, midVal 4