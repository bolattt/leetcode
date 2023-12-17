/**
 * @param {string[][]} paths
 * @return {string}
  loop through 
  map 1st item to second 
  after loop 
 */
var destCity = function(paths) {
    const citySet = new Set()
    const map = new Map()
    for(let i = 0; i < paths.length; i++) { 
        map.set(paths[i][0],paths[i][1])
        citySet.add(paths[i][1])
    }
    for(let city of citySet) {
        if(!map.has(city)){ 
            return city
        }
    }
};