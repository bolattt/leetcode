/**
 * @param {number[][]} mat
 * @return {number}
    
 */
var numSpecial = function(mat) {
    let count = 0  
    for(let i = 0; i < mat.length; i++) { 
        let oneCountInRow = 0 
        let colIndex; 
         for(let j = 0; j < mat[i].length; j++) { 
            if(mat[i][j] == 1) { 
                oneCountInRow++;
                colIndex = j
            }
         }
        
        let countOfOneInCol = 0
        if(oneCountInRow == 1) { 
            console.log({colIndex})
            for(let i = 0; i < mat.length; i++) { 
               if(mat[i][colIndex] == 1) { 
                countOfOneInCol++
                   console.log({countOfOneInCol})
                   if(countOfOneInCol > 1) break 
               }
            }
            if(countOfOneInCol == 1) count++
        }
    }
    return count 
};