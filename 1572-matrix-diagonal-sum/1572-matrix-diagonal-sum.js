/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0
 
    for(let row = 0; row < mat.length; row++) { 
        let col = mat.length - row - 1 
        sum += mat[row][row]
        if(row != col) sum += mat[row][col]
     }

    return sum 
};