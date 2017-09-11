/**
 * @RawTimmy
 */

 /**
 * @param {number} num
 * @return {number[]}
 */

var countBits = function(num) {
    if(num == 0){
        return [0];
    }
    
    var result = [0,1];
    
    for(var i = 2; i <= num; i++){
        result.push(result[parseInt(i/2)]+result[i%2]);
    }
    
    return result;
};