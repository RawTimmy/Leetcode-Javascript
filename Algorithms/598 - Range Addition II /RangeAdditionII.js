/**
 * @RawTimmy
 */

 /**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
 
var maxCount = function(m, n, ops) {

    var arrLength = ops.length;
    
    if(arrLength == 0){
        return m * n
    };
    
    var min_a = ops[0][0];
    var min_b = ops[0][1];
    for(var i = 1; i < arrLength; i++){
        if(ops[i][0] < min_a){
            min_a = ops[i][0];
        }
        if(ops[i][1] < min_b){
            min_b = ops[i][1];
        }    
    }
    
    return min_a * min_b;
};