/**
 * @RawTimmy
 */

 /**
 * @param {number} x
 * @return {number}
 */
 
var reverse = function(x) {
    var y = 0;
    while(x){
        y = y*10 + x%10;
        x = parseInt(x/10);
    }
    if(y > Math.pow(2,31) || -y > Math.pow(2,31)){
        y = 0;
    }
    return y;
};