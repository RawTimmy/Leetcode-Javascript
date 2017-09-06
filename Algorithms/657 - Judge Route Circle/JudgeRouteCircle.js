/**
 *  @RawTimmy
 */

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var num1 = 0, num2 = 0;
    var strArr = moves.split("");
    for(var i = 0;i < strArr.length;i++){
        var strCheck = strArr[i];
        switch(strCheck){
            case "L":
                num1 += 1;
                break;
            case "R":
                num1 -= 1;
                break;
            case "U":
                num2 += 1;
                break;
            case "D":
                num2 -= 1;
                break;
        }
    }
    if(num1 === 0 && num2 === 0){
        return true;
    }else{
        return false;
    }
};