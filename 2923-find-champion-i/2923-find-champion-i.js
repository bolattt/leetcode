/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    let maxStrength = 0 
    let winningTeamIndex; 
    
    for(let row  = 0; row < grid.length; row++) { 
        let strength = 0
        for(let col of grid[row]) { 
            if(col === 1) strength++      
        }
        if(strength > maxStrength) { 
            maxStrength = strength
            winningTeamIndex = row
        }
    }
    return winningTeamIndex 
};