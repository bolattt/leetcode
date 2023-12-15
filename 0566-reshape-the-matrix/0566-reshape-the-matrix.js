/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  
    let isLegal = mat[0].length * mat.length == r *c 
    if(!isLegal) return mat
    
    let flat = mat.flat()
    // let res = Array(r).fill(Array(c))
    let res = []
    let i = 0 
    for(let row = 0; row < r; row++) { 
        let temp = []
        for(let col = 0; col < c; col++) { 
            temp.push(flat[i++])
        }
        res.push(temp)
    } 
    console.log(res)
    return res
};