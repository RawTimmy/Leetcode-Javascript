/**
 * @param {string} s
 * @return {string}
 */
 
var longestPalindrome = function(s) {
    var n = s.length;
    
    if(n == 0) return "";
    if(n == 1) return s;
    
    let min_start = 0, max_len = 1;
    
    for(let i = 0; i < n; ){
        
        if(n - i <= max_len / 2) break;
        
        let j = i, k = i;
        
        while(k < n - 1 && s[k+1] == s[k]){
            ++k;
        }
        
        i = k + 1;
        
        while(k < n - 1 && j > 0 && s[k+1] == s[j-1]){
            ++k;
            --j;
        }
        
        let new_len = k - j + 1;
        if(new_len > max_len){
            min_start = j;
            max_len = new_len;
        }
    }
    return s.substr(min_start, max_len);
};