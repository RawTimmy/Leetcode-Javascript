/**
 *  @RawTimmy
 */

 /**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var strArr = s.split(' ');
    var strArrLength = strArr.length;
    for(var i=0;i<strArrLength;i++){
        strArr[i] = strArr[i].split('').reverse().join('');
    }
    s = strArr.join(' ');
    return s;
};

