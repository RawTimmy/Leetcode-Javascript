/**
 *  @RawTimmy
 */

 /**
 * @param {string} s
 * @return {string}
 */
 
var reverseString = function(s) {
    var reStr = '';
    var strLength = s.length-1;
    for(var i = strLength;i>=0;i--){
        reStr += s[i];
    }
    return reStr;
};