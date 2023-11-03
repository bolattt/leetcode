/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const strength = []    
    
    for(let i = 0; i < mat.length; i++) {
        let innerArr = mat[i]
        let left = 0; 
        let right = innerArr.length - 1; 
        
        while( left <= right) { 
            const mid = Math.floor((left + right) / 2 )
            const midVal = innerArr[mid]
            if(midVal == 0) { 
                right = mid - 1
            } else { 
                left = mid + 1 
            }
        }
        
        const rowStrength = right + 1 
        strength.push([rowStrength,i])
    }
          
    strength.sort((a,b) => a[0] - b[0])
    
    const ans = []
    for(let i = 0; i < k; i++) { 
        ans.push(strength[i][1])
    }
    return ans
    
};


