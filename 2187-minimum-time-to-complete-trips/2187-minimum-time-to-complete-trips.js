/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let minT = Math.min(...time)
    let maxT = minT * totalTrips 
    
    while(minT <= maxT) { 
        const midT = Math.floor((minT + maxT) / 2)
        const isPossible = checkIfPossible(time,midT,totalTrips)
        if(isPossible) { 
            maxT = midT - 1; 
        } else { 
            minT = midT + 1;
        }
    }
    return minT
};

function checkIfPossible(time,midT, totalTrips) { 
    let trips = 0 
    for(let i = 0; i < time.length; i++) { 
        let curT = time[i]
        let tripsByCurBus = Math.floor(midT / curT) 
        trips += tripsByCurBus
        if(trips >= totalTrips) return true
    }
    return false 
}

// time = [1,2,3], totalTrips = 5
// min 1, max 5, mid 3
// min 1, max 2, mid 1 
// min 2, max 2, mid 2 
// min 3, max 2 
// after while loop, min will be pointing at min time required to comeplete the trips 




