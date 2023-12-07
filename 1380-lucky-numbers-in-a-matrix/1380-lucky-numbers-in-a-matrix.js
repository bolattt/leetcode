/**
 * @param {number[][]} matrix
 * @return {number[]}
    smallest in its row , largest in its column
 */
var luckyNumbers  = function(m) {
    let res = []
    let numSet = new Set();
    // get the min from rows 
    for(let row = 0; row < m.length; row++) { 
        let minEl = Infinity
        for(let col = 0; col < m[0].length; col++) {
            let curEl = m[row][col]
            if(curEl < minEl) { 
                minEl = curEl
            }
        }
        numSet.add(minEl)
    }
    // get the max from cols, if it's already in set, add it to res
    for(let col = 0; col < m[0].length; col++) { 
        let maxEl = 0
        for(let row = 0; row < m.length; row++) { 
           let curEl = m[row][col]
           if(curEl > maxEl) { 
            maxEl = curEl
           }
        }
        if(numSet.has(maxEl)) { 
            res.push(maxEl)
        }
    }
    return res
};



/* 
    
[
     [3,7,8],
     [9,11,13],
     [15,16,17]
 ]
 
  [
    [1, 10, 4, 2],
    [9, 3 , 8, 7],
    [15,16,17,12]
 ]
  
*/