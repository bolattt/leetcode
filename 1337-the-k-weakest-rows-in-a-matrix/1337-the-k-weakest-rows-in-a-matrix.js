/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    
    // declare an  array to hold the strength of each row 
    const strength = []
    
    // find the strength of each row 
        // loop through the outer array
    // for(let m of mat) { 
    for(let i = 0; i < mat.length; i++) {
        let innerArr = mat[i]
         // use binary search to get strength of each row 
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
          
    console.log(strength)
    // sort the ans array 
    // slice the array from 0 to k 
    
    strength.sort((a,b) => { 
       return a[0] - b[0]
    })
    console.log(strength)
    
    const ans = []
    for(let i = 0; i < k; i++) { 
        ans.push(strength[i][1])
    }
    console.log(ans)
    return ans
};

                
// [ 1, 1, 1, 1, 1, 0, 0, 0, ]             
//  [1,0,0,0,0] 
// if mid is 1, left = mid + 1
// if mid is 0, move end to mid - 1 
// end will be pointing to the last soldier 
// index + 1 = strength of the row 
