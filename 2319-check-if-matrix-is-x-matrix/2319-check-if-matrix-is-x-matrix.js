/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    for(let row = 0 ; row < grid.length; row++){ 
        for(let col = 0; col < grid[0].length; col++){ 
            if(row == col) { 
                if(grid[row][col] == 0) return false
            } else if(row + col == grid.length - 1) { 
                if(grid[row][col] == 0) return false
            } else { 
                if(grid[row][col] != 0) return false
            }
        }
    }
    return true 
};
    
// 00,11,22,33, 
// 03,12, 21,30
    
/* 
  [
    [2,0,0,1],
    [0,3,1,0],
    [0,5,2,0],
    [4,0,0,2] 
  ]
*/ 