/**
 *  @RawTimmy
 */

 /**
 * @param {number[][]} grid
 * @return {number}
 */

var islandPerimeter = function(grid) {
    
    var total = 0;
    
    for(var i = 0; i < grid.length;i++){
        for(var j = 0; j < grid[i].length;j++){
            if(grid[i][j] == 1){
                var count = 0;

                if(i-1>=0 && grid[i-1][j] == 1){
                	count++
                };

                if(i+1<grid.length && grid[i+1][j] == 1){
                	count++
                };

                if(j-1>=0 && grid[i][j-1] == 1){
                	count++
                };

                if(j+1< grid[i].length && grid[i][j+1] == 1){
                	count++
                };

                total += 4 - count;
            }
        }
    }
    return total;
};