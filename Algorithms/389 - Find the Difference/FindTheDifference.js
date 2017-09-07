/**
 *  @RawTimmy
 */

 /**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 
var findTheDifference = function(s, t) {
    const n = t.length;
    var result = t.charCodeAt(n-1);
    for(var i = 0; i < n - 1; i++){
        result ^= s.charCodeAt(i);
        result ^= t.charCodeAt(i);
    }
    return String.fromCharCode(result);
};