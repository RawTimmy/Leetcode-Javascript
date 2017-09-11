/**
 * @param {string} s
 * @return {string[]}
 */
 
var findRepeatedDnaSequences = function(s) {
    var n = s.length, temp = 0;
    var map = [], res = [], hash = new Set(), hash_res = new Set();
    
    map['A'] = 0, map['C'] = 1, map['G'] = 2, map['T'] = 3;
    
    for(var i = 0; i < n; i++){
        temp = temp << 2 | map[s[i]];
        if(i < 9){
            continue;
        }
        if(i > 9){
            temp = temp & 0xfffff;
        }
        
        if(!hash.has(temp)){
            hash.add(temp);
        }else if(!hash_res.has(temp)){
            hash_res.add(temp);
            res.push(s.substring(i-9,i+1));
            }
        }
        
    return res;
  
};