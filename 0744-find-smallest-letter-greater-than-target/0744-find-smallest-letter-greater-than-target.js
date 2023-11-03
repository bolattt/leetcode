/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0; 
    let right = letters.length - 1; 
    
    while(left <= right) { 
        const mid = Math.floor((left+right) / 2) 
        const midLetter = letters[mid]
        if(midLetter > target) { 
            right = mid - 1
        } else { 
            left = mid + 1
        }
    }
    
   if(letters[left] > target) return letters[left]
    return letters[0]
};

