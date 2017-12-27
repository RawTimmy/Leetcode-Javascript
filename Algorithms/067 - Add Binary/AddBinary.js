/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 
var addBinary = function(a, b) {
    let res = [];
    let i = a.length - 1, j = b.length - 1, carry = 0;
    
    while(i >= 0 || j >= 0){
        let sum = carry;
        if(j >= 0){
            sum += b.charAt(j--) - '0';
        }
        if(i >= 0){
            sum += a.charAt(i--) - '0';
        }
        res.push(sum % 2);
        carry = parseInt(sum / 2);
    }
    
    if(carry != 0){
        res.push(carry);
    }
    
    return res.reverse().join('');
};