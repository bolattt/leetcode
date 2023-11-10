/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}

  
 */
var getLastMoment = function(n, left, right) {
    
    console.log(left,right)
    let lastAntGoingRight = Math.min(...right)
    let lastAntGoingLeft =  Math.max(...left)
    
    let leftTime = lastAntGoingLeft || 0
    let rightTime = n - lastAntGoingRight || 0   
    let maxTime = Math.max(leftTime,rightTime)
    return maxTime
};













