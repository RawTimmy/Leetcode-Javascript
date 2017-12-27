/**
 * @param {number} x
 * @return {number}
 */
 
var mySqrt = function(x) {
    if(x == 0) return 0;
    
    let left = 1, right = x;
    
    while(left <= right){
        let mid = left + ((right - left) >> 1);
        if(mid * mid > x){
            right = mid - 1;
        }else if(mid * mid < x){
            left = mid + 1;
        }else{
            return mid;
        }
    }
    
    return left-1;
};