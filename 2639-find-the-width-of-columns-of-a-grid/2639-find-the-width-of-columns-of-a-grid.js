/**
 * @param {number[][]} grid
 * @return {number[]}
  find the width of columns 
  [ [-15, 1,  3],
    [ 15, 7, 12],
    [  5, 6,- 2]
    ]  => [3,1,2]
  
  [ [1],
    [22],
    [333]
]  =>  [3]

 create result array 
 loop through the columns 
    get the max width of each column 
        convert num to string and get the length 
    then push max width to result array
    
 return result array 
 */
var findColumnWidth = function(grid) {
    let width = [] 
    for(let col = 0; col < grid[0].length; col++) { 
        let maxColWidth = 0 
        for(let row = 0; row < grid.length; row++){ 
            let cur = grid[row][col] 
            let curWidth = cur.toString().length
            if(maxColWidth < curWidth) { 
                maxColWidth = curWidth
            }
        }
        width.push(maxColWidth )
    }
    
    return width 
};