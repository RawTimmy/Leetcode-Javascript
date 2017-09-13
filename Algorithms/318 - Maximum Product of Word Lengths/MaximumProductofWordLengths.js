/**
 * @param {string[]} words
 * @return {number}
 */
 
var maxProduct = function(words) {
    var temp = [];
    for(var i = 0; i < words.length; i++){
        var tempObj = {};
        tempObj.item = words[i];
        
        var num = 0;
        for(var j = 0; j < words[i].length; j++){
            num |= 1 << (words[i].charCodeAt(j) - 97);   
        }
        
        tempObj.num = num;
        temp.push(tempObj);
    }
    
    var res = 0;
    
    for(var i = 0; i < temp.length; i++){
        for(var j = i + 1; j < temp.length; j++){
            var item1 = temp[i];
            var item2 = temp[j];
            
            if(item1.num & item2.num){
                continue;
            }
            
            res = Math.max(res, item1.item.length * item2.item.length);
        }
    }
    
    return res;
};