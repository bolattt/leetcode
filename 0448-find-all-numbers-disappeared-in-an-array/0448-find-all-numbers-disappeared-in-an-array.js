/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // track what is in the nums array 
    let obj = { }
    for(let num of nums) { 
        obj[num] = true 
    }
    
    let n = nums.length; 
    let output = []
    
    // loop through the range, from 1 to n
    // check if i range is in  obj 
    for(let i = 1 ; i <= n; i++ ) { 
        if(!obj[i]) { 
            console.log('here')
            output.push(i)
        } 
    }
    
    return output
 };
