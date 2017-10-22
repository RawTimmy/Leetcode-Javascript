/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 
var convert = function(s, numRows) {
    if(s == null) return "";
    if(numRows == 1) return s;
    
    let n = 2 * numRows - 2;
    let res = [];
    
    for(let k = 0; k < numRows; k++){
        res.push("");
    }
    
    for(let i in s){
        let lineNum = i % n;
        if(lineNum < numRows){
            res[lineNum] += s[i];
        }else{
            res[2*numRows - lineNum - 2] += s[i];
        }
    }
    
    return res.join("");
};