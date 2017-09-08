/**
 * @RawTimmy
 */

/**
 * @param {number} area
 * @return {number[]}
 */
 
var constructRectangle = function(area) {
    
    var width = Math.floor(Math.sqrt(area));
    
    while(area % width != 0){
        width--;
    }
    
    return [area/width, width];
};