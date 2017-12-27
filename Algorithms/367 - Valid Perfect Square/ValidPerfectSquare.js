/**
 * @param {number} num
 * @return {boolean}
 */
 
var isPerfectSquare = function(num) {
    if(num == 0) return false;
    
    let i = 0;
    while(i * i < num){
        i++;
    }

    if(i * i == num) return true;
    else return false;
};