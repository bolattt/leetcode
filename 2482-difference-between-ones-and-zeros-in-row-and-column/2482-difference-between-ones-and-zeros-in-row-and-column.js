/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const diff = Array.from({length:grid.length}, () => Array(grid[0].length)) 
    const rowDiff = []
    const colDiff = []
    console.log(diff)
    
    for(let i = 0; i < grid.length; i++)  {
        let oneRow = 0, zeroRow = 0
        for(let j = 0; j < grid[0].length; j++) { 
            if(grid[i][j] == 0)  zeroRow++ 
            else oneRow++
        }
        rowDiff.push(oneRow - zeroRow)
    }
    
    for(let col = 0; col < grid[0].length; col++) {
        let zeroCol = 0, oneCol = 0
        for(let row = 0; row < grid.length; row++) { 
            if(grid[row][col] == 0) zeroCol++
            else oneCol++
        }
        colDiff.push(oneCol - zeroCol)
    }
    console.log(rowDiff,colDiff)
    
    for(let row = 0; row < diff.length; row++){ 
        for(let col = 0; col < diff[0].length; col++) {
            diff[row][col] = rowDiff[row] + colDiff[col]   
        }
    }
    return diff
};