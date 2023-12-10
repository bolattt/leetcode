/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0
    for(let row = 0; row < mat.length; row++) { 
        for(let col = 0; col < mat.length; col++) { 
            if(row == col) sum += mat[row][col]
            else if(row + col === mat.length - 1) sum += mat[row][col]
        }
    }
    return sum
};