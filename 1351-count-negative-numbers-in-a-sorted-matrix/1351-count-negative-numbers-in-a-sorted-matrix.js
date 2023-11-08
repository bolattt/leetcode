/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0; 
    for(let row of grid) { 
        let left = 0; 
        let right = row.length - 1; 
        // look for first negative 
        while(left <= right) { 
            const mid = Math.floor((left + right) / 2) 
            if(row[mid] < 0) right = mid - 1
            else if(row[mid] >= 0) left = mid + 1
        }
        // after the while loop,left will be pointing at first negative num
        const numOfNegativesInRow = row.length - left 
        count += numOfNegativesInRow
    }
    return count
};