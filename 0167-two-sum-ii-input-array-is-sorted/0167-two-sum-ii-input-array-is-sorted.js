/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {


    for(let i = 0; i < numbers.length; i++) { 
          let left = i; 
          let right = numbers.length - 1; 
          let complement =  target - numbers[i]

        while(left <= right) { 
            const mid = Math.ceil((left + right) / 2) 
            const midVal = numbers[mid]
            
            if(midVal == complement) return [i +1, mid +1]
            else if(midVal > complement) right = mid - 1
            else left = mid + 1
        } 
        
    }
    
};


// [2,3,4]  target = 6 
// left 0 , right 2 , mid 1 ,com 4 , midVal 3 
// left 2, right 2, mid 2, com 4, midVal 4 

// [1,2,3,4,4,9,56,90] target = 8 
// i 0, left 0, right 7, mid 3, midVal 4, complement 7 
// i 0, left 4, right 7, mid 5, midVal 9, complement 7 
// i 0, left 4, right 4,  mid 4, midVal 4, complement 7 
// i 0, left 5, right 4

// i 3, left 3, right 7, mid 5, midVal 9, complement 4
// i 3, left 3, right 4, mid 3, midVal 4, complement 4
