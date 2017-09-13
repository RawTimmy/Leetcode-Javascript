/**
 * @RawTimmy
 */

 /**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function(n) {
    var count = 0;
    
    while(n > 0){
        if(n&1){
            count++;
        }
        n >>= 1;
    }
    
    if(count == 1){
        return true;
    }else{
        return false;
    }
};