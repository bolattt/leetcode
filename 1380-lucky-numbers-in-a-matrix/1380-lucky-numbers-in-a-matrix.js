/**
 * @param {number[][]} matrix
 * @return {number[]}
    smallest in its row , largest in its column
 */
var luckyNumbers  = function(m) {
    let minRowEl = []
    let maxColEl = []
    let res = []
    let numSet = new Set();
    for(let row = 0; row < m.length; row++) { 
        let minEl = Infinity
        for(let col = 0; col < m[0].length; col++) {
            let curEl = m[row][col]
            if(curEl < minEl) { 
                minEl = curEl
            }
        }
        minRowEl.push(minEl)
        numSet.add(minEl)
    }
    
    for(let col = 0; col < m[0].length; col++) { 
        let maxEl = 0
        for(let row = 0; row < m.length; row++) { 
           let curEl = m[row][col]
           if(curEl > maxEl) { 
            maxEl = curEl
           }
        }
        maxColEl.push(maxEl)
        if(numSet.has(maxEl)) { 
            res.push(maxEl)
        }
    }
    console.log(minRowEl,maxColEl)
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