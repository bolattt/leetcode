/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let left = 0; 
    let right = 1;
    
    while(arr[left] < arr[right]) { 
        left++
        right++
    }
    return --right
};