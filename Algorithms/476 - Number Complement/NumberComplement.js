/**
 *  @RawTimmy
 */

/**
 * @param {number} num
 * @return {number}
 */

var findComplement = function(num) {
    num = num.toString(2);
    var numLength = num.length;
    var num2 = '';
    for(var i = 0;i < numLength;i++){
        if(num[i] == 1){
            num2 += '0';
        }else{
            num2 += '1';
        }
    }
    return parseInt(num2,2);
};