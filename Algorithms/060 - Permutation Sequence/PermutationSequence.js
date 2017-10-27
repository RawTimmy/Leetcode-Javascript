/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 
var getPermutation = function(n, k) {
    
    let numArr = [], facArr = [1], res = [];
    let sum = 1;
    k--;
    
    for(let i = 1; i <= n; i++){
        numArr.push(i);
        sum *= i;
        facArr.push(sum);
    }
    
    for(let i = 1; i <= n; i++){
        let temp = parseInt(k / facArr[n-i]);
        res.push(numArr[temp]);
        numArr.splice(temp,1);
        k -= temp * facArr[n-i];
    }
    
    res = res.join('');
    return res;
};