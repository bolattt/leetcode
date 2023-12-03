/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let left = 0,sum = 0,count = 0; 
    for(let right = 0; right < arr.length; right++ ) { 
        sum += arr[right] 
        if(right - left + 1 === k) { 
            let avg = sum / k 
            if(avg >= threshold) { 
                count++
            }
            sum -= arr[left++]
        }
    }
    return count; 
};