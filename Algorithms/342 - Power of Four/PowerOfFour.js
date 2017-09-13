/**
 * @param {number} num
 * @return {boolean}
 */
 
var isPowerOfFour = function(num) {
    if(num <= 0) return false;
    if(num & (num-1)) return false;
    if(num & 0x55555555) return true;
    return false;
};