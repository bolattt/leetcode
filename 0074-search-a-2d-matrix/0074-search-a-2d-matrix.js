/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // loop through rows 
    // check if target is within row's range 
        // if yes, do binary search, if found return , if not return false 
    // if not within range, continue to the next row 
    
    for(let row of matrix) { 
        let left=  0 
        let right = row.length -1 
        
        if(target == row[left] || target == row[right] ) return true
        console.log({target,left,right,})
        console.log(row[left],row[right])
        if(target > row[left] && target < row[right]) {  
        
            while(left <= right) { 
                let mid = Math.floor((left + right) / 2 ) 
                console.log({mid})
                if(row[mid] == target) return true 
                else if(row[mid] <  target) left = mid + 1 
                else right = mid - 1 
            }
            return false 
        }
    }
    return false 
};

