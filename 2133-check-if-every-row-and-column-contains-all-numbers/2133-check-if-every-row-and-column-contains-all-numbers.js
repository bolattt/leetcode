/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(mat) {
    const numSet = new Set()
    for(let i = 1 ; i <= mat.length; i++) { 
        numSet.add(i)
    }

    for(let i = 0; i < mat.length; i++) {
        // check row
        let rowSet = new Set(mat[i])
        if(rowSet.size < numSet.size) return false
        
        // check col 
        let colSet = new Set()
        for(let j = 0; j < mat.length; j++) { 
            colSet.add(mat[j][i])
        }
   
        if(colSet.size < numSet.size) {
            return false
        }
    }
    return true 
};