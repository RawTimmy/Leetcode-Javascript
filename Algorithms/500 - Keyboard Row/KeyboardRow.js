/**
 *  @RawTimmy
 */
 
/**
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function(words) {
    // set three subArrays
    var list = [];
    list[0] = ["a","s","d","f","g","h","j","k","l","A","S","D","F","G","H","J","K","L"];
    list[1] = ["q","w","e","r","t","y","u","i","o","p","Q","W","E","R","T","Y","U","I","O","P"];
    list[2] = ["z","x","c","v","b","n","m","Z","X","C","V","B","N","M"];
    
    // store length of Array of "words" and set an empty output Array
    var wordArrLength = words.length;
    var outArr = [];
    
    /*  1. store the length of subElement of "words". (once in a loop)
        2. set "flag" as true, set "tag" as -1 .
        3. "tag" works like a navigation, by searching which list the first sub-element belongs to.
        4. "flag" works like a switch, only "true" when all alphabets are in the same row. */
    for(var i=0;i<wordArrLength;i++){
        var wordLength = words[i].length;
        var flag = true;
        var tag = -1;
        
        if(list[0].indexOf(words[i][0])!== -1) tag = 0;
        else if(list[1].indexOf(words[i][0])!== -1) tag = 1;
        else tag = 2;
        
        for(var j=0;j<wordLength;j++){
            if(list[tag].indexOf(words[i][j]) == -1){
                flag = false;
                break;
            }   
        }
        
        if(flag == true) outArr.push(words[i]);  
    }
    
    return outArr;
};