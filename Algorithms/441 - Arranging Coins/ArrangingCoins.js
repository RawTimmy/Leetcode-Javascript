/**
 * @param {number} n
 * @return {number}
 */
 
var arrangeCoins = function(n) {
    if(n == 0) return 0;
    if(n == 1) return 1;
    let temp = n;
    for(let i = 1; i <= n; i++){
        temp -= i;
        if(temp < 0){
            return i - 1;
        }else if(n == 0){
            return i;
        }
    }
};