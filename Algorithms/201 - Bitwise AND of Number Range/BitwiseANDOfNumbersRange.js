/**
 * @RawTimmy
 */

/**
  * @param {number} m
 * @param {number} n
 * @return {number}
 */
 
var rangeBitwiseAnd = function(m, n) {
    var count = 0;
    while(n != m){
        n >>= 1;
        m >>= 1;
        count++;
    }
    return(m << count);
};