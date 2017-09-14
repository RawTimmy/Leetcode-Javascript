/**
 * @RawTimmy
 */

 /**
 * @param {number[]} data
 * @return {boolean}
 */

/**
 * 128 == '10000000'
 * 192 == '11000000'
 * 224 == '11100000'
 * 240 == '11110000'
 * 248 == '11111000'
 */
 
var validUtf8 = function(data) {
    
    if(data == null || data.length === 0) return false;
    
    var flag = true;
    
    for(var i = 0; i < data.length; i++){
        var check = data[i];
        if(check > 255) return false;
        
        var numsBytes = 0;
        if((check & 128) === 0) numsBytes = 1;
        else if((check & 224) == 192) numsBytes = 2;
        else if((check & 240) == 224) numsBytes = 3;
        else if((check & 248) == 240) numsBytes = 4;
        else return false;
        
        for(var j = 1; j < numsBytes; j++){
            if(i+j >= data.length) return false;
            if((data[i+j] & 192) != 128) return false;
        }
        
        i = i + numsBytes - 1;
    }
    
    return flag;  
};