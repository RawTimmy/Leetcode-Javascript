/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 
var addStrings = function(num1, num2) {
    let res = [];
    let carry = 0;
    
    for(let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || carry == 1; i--, j--){
        let x = i < 0 ? 0 : num1.charAt(i) - '0';
        let y = j < 0 ? 0 : num2.charAt(j) - '0';
        let sum = x + y + carry;
        res.push(sum % 10);
        carry = Math.floor(sum / 10);
    }
    
    return res.reverse().join('');
};