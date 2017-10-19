/**
 * @RawTimmy
 */

 /**
 * @param {number} n
 * @return {boolean}
 */
 
var hasAlternatingBits = function(n) {
    if(n == 1) return true;
    var regEx = /^(10)+1?$/;
    return regEx.test(n.toString(2));
};