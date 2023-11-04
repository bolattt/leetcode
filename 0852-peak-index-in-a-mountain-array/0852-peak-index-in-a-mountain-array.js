/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
   let left = 0 ;
    let right = arr.length - 1; 
    
    while(left <= right) { 
        const mid = Math.floor((left + right) / 2) 
        const peak = arr[mid] 
        if(peak > arr[mid -1] && peak > arr[mid + 1] ) return mid 
        else if(peak < arr[mid - 1]) right = mid - 1
        else left = mid + 1 
    }
};
    
    // [0,10,8,5,2]
    // [0,2,5,8,10,0]