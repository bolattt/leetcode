/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let top = 0
    let bottom = matrix.length - 1
    let midRow
    
    while(top <= bottom) { 
        let mid =   Math.floor((top + bottom) / 2 ) 
         midRow = matrix[mid]
        
        if(target < midRow[0]) bottom = mid -  1
        else if (target > midRow[midRow.length -1]) top = mid + 1 
        else break; 
    }
    console.log({top,bottom})
    // after while loop, target will be within range of midRow
    // if target is not within range of all rows, top will be greater than bottom 
    if(top > bottom) return false 
    
    let left = 0; 
    let right = matrix[0].length - 1 

    while(left <= right) { 
        let mid = Math.floor((left + right) / 2)
        console.log({left,right,mid})
        if(target == midRow[mid]) return true 
        else if(target < midRow[mid]) right  =  mid - 1 
        else left = mid + 1 
    }
    return false 
};

