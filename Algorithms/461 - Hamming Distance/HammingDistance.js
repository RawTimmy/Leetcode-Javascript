/**
 *  @RawTimmy
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {

    var num1 = x.toString(2).split("");
    var num2 = y.toString(2).split("");
    var numArr = [];
    var longerNum, shorterNum;
    var diff = 0;

    if(num1.length >= num2.length){
        longerNum = num1; shorterNum = num2;
    }else{ 
        longerNum = num2; shorterNum = num1; 
    }

    for(var i = 0;i < longerNum.length - shorterNum.length;){
        numArr.push("0");
        i++;
    }
    for(var j = 0;j < shorterNum.length;j++){
        numArr.push(shorterNum[j]);
    }
    for(var k = 0;k < numArr.length;k++){
        if(numArr[k] !== longerNum[k]){
            diff +=1;
        }
    }
    return  diff;
};