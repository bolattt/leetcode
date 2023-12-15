/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  
    const isLegal = mat[0].length * mat.length == r *c 
    if(!isLegal) return mat
    
    const flat = mat.flat()
    const res = []
    let i = 0 
    for(let row = 0; row < r; row++) { 
        const temp = []
        for(let col = 0; col < c; col++) { 
            temp.push(flat[i++])
        }
        res.push(temp)
    } 
    return res
};