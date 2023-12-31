/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let seen = new Set(); 
    let x = 0, y = 0; 
     
    seen.add('0,0')
    
    for(let p of path) { 
        if(p == 'N')      y++
        else if(p == 'S') y--
        else if(p == 'E') x++
        else if(p == 'W') x--
        
        let str = x.toString() +"," + y.toString()
        
        if(seen.has(str)) { 
            return true 
        }else if(!seen.has(str)) { 
            seen.add(str)
        }     
    }

    return false 
    
};