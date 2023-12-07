/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0 
    for(let customer of accounts) { 
        let total = 0
        for(let amount of customer) { 
            total += amount
        }
        if(total > maxWealth) maxWealth = total
    }
    return maxWealth 
};