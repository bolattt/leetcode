/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0
 
    for(let row = 0; row < mat.length; row++) { 
        let col = mat.length - row - 1 
        sum += mat[row][row]
        sum += mat[row][col]
     }

    let center = Math.floor(mat.length / 2)
    if(mat.length % 2 != 0) sum -= mat[center][center]
    return sum 
};