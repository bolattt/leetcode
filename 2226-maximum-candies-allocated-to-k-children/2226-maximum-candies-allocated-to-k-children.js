/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
   let min = 1; 
   let max = Math.max(...candies) 
   

    
    while(min <= max) { 
        const mid = Math.floor((min + max) / 2 )
        const isPossible = checkIfPossible(candies,mid,k)
        if(isPossible) { 
            min = mid + 1 
        } else { 
            max = mid - 1 
        }
    }    
    return max 
}; 

function checkIfPossible(candies,mid,k) { 
    let pileOfMidCandies = 0 
    for(let i = 0; i < candies.length; i++) { 
        let curCandies = candies[i]
        let piles = Math.floor( curCandies / mid  )
        pileOfMidCandies += piles 
        if(pileOfMidCandies >= k) return true 
    }
    return false 
}



// [5,8,6] k = 3 
// [5,5,3,5,1]  ans 5 

// [5,8,6] k = 4 
// [4,1,4,4,4,2]  ans 4

// [1,2,3 ] k = 3 
// [1,2,1,1,1] ans = 1 

// [1,2,6 ] k = 3 
// [1,2,2,2,2] ans = 2 

// [5,8,6,18] k = 3 
// [5,8,6,6,6,6] ans 6

// [5,8,18] k = 3 
// [5,8,6,6,6] ans 6 

// [6,8,18] k = 3 
// [6,8,6,6,6] ans 6 


// [3,8,18] k = 3 
// [3,8,6,6,6] 6 

// [2,5,10] , k = 11 
// max is less than k 
// ans 0 
