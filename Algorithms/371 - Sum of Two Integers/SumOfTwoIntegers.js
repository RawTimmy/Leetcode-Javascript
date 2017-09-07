/**
 *  @RawTimmy
 */

 /**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

var getSum = function(a, b) {
    if(b == 0){
        return a;
    }
    
    var temp1 = a^b;
    var temp2 = (a&b) << 1;
    return getSum(temp1,temp2);
    
};