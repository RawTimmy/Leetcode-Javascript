/**
 *  @RawTimmy
 */

 /**
 * @param {number[]} candies
 * @return {number}
 */
 
var distributeCandies = function(candies) {
    var hash = new Set(candies);  
    var setSize = hash.size;
    var maxSize = candies.length/2;
    
    return Math.min(setSize,maxSize);
};