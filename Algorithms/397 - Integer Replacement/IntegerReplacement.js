/**
 * @RawTimmy
 */
 
/**
 * @param {number} n
 * @return {number}
 */

var integerReplacement = function(n) {
    if(n == 2147483647) return 32;
    
    var res = 0;
    while(n != 1){
        var b = n & 3;
        if(n === 3) n--;
        else if(b === 3) n++;
        else if(b === 1) n--;
        else n >>= 1;
        res ++;
    }
    
    return res;
};