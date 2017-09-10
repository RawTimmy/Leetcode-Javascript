/**
 * @RawTimmy
 */

 /**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    var l = s.length;
    var arr = [];
    var i = 0, j = 0, result = 0;
    
    while(i < l && j < l){
        if(arr.indexOf(s.charAt(j)) == -1){
            arr.push(s.charAt(j++));
            result = Math.max(result, j-i);
        }else{
            arr.splice(arr.indexOf(s.charAt(i++)),1);
        }
    }
    return result;
};