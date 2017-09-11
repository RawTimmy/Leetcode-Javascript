/**
 * @RawTimmy
 */

 /**
 * @param {number} num
 * @return {string}
 */
 
var toHex = function(num) {
    if(num === 0){
        return "0";
    }
    
    var result = "";
    var list = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    
    while(num !== 0){
        result = list[num&15] + result;
        num = num >>> 4;
    }
    
    return result;
};