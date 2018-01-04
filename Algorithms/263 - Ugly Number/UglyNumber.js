/**
 * @param {number} num
 * @return {boolean}
 */
 
var isUgly = function(num) {
    for(let i = 2; i < 6 && num > 0; i++){
        while(num % i == 0){
            num /= i;
        }
    }
    return num == 1;
};