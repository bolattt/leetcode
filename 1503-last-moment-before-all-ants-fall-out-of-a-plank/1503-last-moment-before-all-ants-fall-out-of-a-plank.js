/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}

  
 */
var getLastMoment = function(n, left, right) {
    left.sort((a,b) => a-b) 
    right.sort((a,b) => { 
        if(a > b) return  1 
        else return - 1
    })
    console.log(left,right)
    let lastAntGoingRight = right[0]
    let lastAntGoingLeft = left[left.length -1]
    
    let leftTime = lastAntGoingLeft || 0
    let rightTime = n - lastAntGoingRight || 0   
    let maxTime = Math.max(leftTime,rightTime)
    return maxTime
};





// n = 20, left [4,7,15] , right [9,3,13,10] 
// ans 17 
// 














