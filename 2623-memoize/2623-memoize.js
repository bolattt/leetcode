/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = new Map() 
    
    return function(...args) {
      let input = JSON.stringify(args) 
      if(cache.has(input)) { 
        return cache.get(input)
      } else { 
         let val = fn(...args)
        cache.set(input,val)
          return val 
      }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */