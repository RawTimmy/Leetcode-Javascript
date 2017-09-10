/**
 * @RawTimmy
 */

 /**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 
var findContentChildren = function(g, s) {
    function sortNum(a,b){
        return a-b;
    }
    
    g = g.sort(sortNum);
    s = s.sort(sortNum);
    
    var i = 0, j = 0;
    while(i < g.length && j < s.length){
        if(g[i] <= s[j]){
            i++;
        }
        j++;
    }
    
    return i;
};