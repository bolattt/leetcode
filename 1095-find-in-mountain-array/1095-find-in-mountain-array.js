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
    
    // get target index on the left of peak 
    left = 0; 
    while(left <= right) { 
        const mid = Math.floor((left + right) / 2 ) 
        const midVal = mountainArr.get(mid) 
        
        if(midVal == target) return mid 
        else if(midVal < target) left = mid + 1 
        else right = mid - 1 
    }

    // if it's not found on left, find target index on right side of peak 
     left = peakIndex 
     right = mountainArr.length() - 1

    while(left <= right) { 
        const mid = Math.floor((left + right) / 2 ) 
        const midVal = mountainArr.get(mid) 
        
        if(midVal == target) return mid 
        else if(midVal < target) right = mid - 1 
        else left = mid + 1 
    }
    return -1 
};

