/**
 * @RawTimmy
 */

 /**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 
var canConstruct = function(ransomNote, magazine) {
    for(var i = 0; i < ransomNote.length; i++){
        var ch = ransomNote[i];
        var flag = magazine.indexOf(ransomNote[i]);
        
        if(flag == -1){
            return false;
        }
        
        magazine = magazine.replace(ransomNote[i],"");
    }
    
    return true;
};