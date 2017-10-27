/**
 * @param {number} num
 * @return {number}
 */

var maximumSwap = function(num) {
    
    function swap(arr, input1, input2){
        let temp = arr[input1];
        arr[input1] = arr[input2];
        arr[input2] = temp;
    }
    
    let tempArr = num.toString(10).split('');
    let numArr = [];
    
    for(let i = 0; i < tempArr.length; i++){
        numArr[tempArr[i] - '0'] = i;   
    }
    
    for(let i = 0; i < tempArr.length; i++){
        for(let k = 9; k > tempArr[i] - '0'; k--){
            if(numArr[k] > i){
                swap(tempArr,i,numArr[k]);
                return parseInt(tempArr.join(""));
            }
        }
    }
    
    return num;
};