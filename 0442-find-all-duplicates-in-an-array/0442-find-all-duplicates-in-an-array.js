/**
 * @param {number[]} nums
 * @return {number[]}
    create obj to count
   l loop through the array 
        increment count in obj 
        if count is two add it to output []
    return output
 */
var findDuplicates = function(nums) {
    let obj = { }
    let output = []
    for(let num of nums) { 
        obj[num] = (obj[num] || 0 ) + 1 
        if(obj[num] == 2 ) output.push(num) 
    }
    return output 
};