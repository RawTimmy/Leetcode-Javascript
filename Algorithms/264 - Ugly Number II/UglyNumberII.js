/**
 * @param {number} n
 * @return {number}
 */
 
var nthUglyNumber = function(n) {
    let res = [];
    let index2 = 0, index3 = 0, index5 = 0;
    res[0] = 1;
    
    for(let i = 1; i < n; i++){
        res[i] = Math.min(res[index2] * 2, Math.min(res[index3] * 3, res[index5] * 5));
        
        if(res[i] == res[index2] * 2){
            index2++;
        }
        
        if(res[i] == res[index3] * 3){
            index3++;
        }
        
        if(res[i] == res[index5] * 5){
            index5++;
        }
    }
    
    return res[n-1];
};