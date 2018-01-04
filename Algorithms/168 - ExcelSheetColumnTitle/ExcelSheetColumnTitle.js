/**
 * @param {number} n
 * @return {string}
 */
 
var convertToTitle = function(n) {
    let temp, res = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    while(n){
        n--;
        temp = n % 26;
        res = alphabet[temp] + res; 
        n = Math.floor(n / 26);
    }
    
    return res;
};