/**
 * @RawTimmy
 */

/**
 * @param {string} s
 * @return {number}
 */

var titleToNumber = function(s) {
    var sum = 0;
    for(var i = 0; i < s.length; i++){
        sum = 26 * sum + s.charCodeAt(i) - 64;
    } 
    return sum;
};