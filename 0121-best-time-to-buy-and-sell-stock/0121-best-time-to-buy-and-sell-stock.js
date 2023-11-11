/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0; 
    let right = 1; 
    let maxProfit = 0; 
    
    while(right < prices.length) { 
        if( prices[right] < prices[left]) { 
             left = right 
        } else { 
            let profit = prices[right] -  prices[left] 
            if(profit > maxProfit) { 
                maxProfit = profit
            }
        }
        right++;
    }
    
    return maxProfit 
};

