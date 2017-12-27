/**
 * @param {number} c
 * @return {boolean}
 */
 
var judgeSquareSum = function(c) {
    let left = 0, right = parseInt(Math.sqrt(c));
    
    while(left < right){
        let res = left * left + right * right;
        if(res > c){
            right--;
        }else if(res < c){
            left++;
        }else{
            return true;
        }
    }
    return false;
};