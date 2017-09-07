/**
 *  @RawTimmy
 */

 /**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
 
var nextGreaterElement = function(findNums, nums) {
    var arrLength1 = findNums.length;
    var arrLength2 = nums.length;
    
    var result = [];
    var flag = false;

    for(var i = 0; i < arrLength1; i++){
        flag = false;
        var numNextLoc = nums.indexOf(findNums[i]) + 1;

        for(var j = numNextLoc ; j < arrLength2; j++){
            if(nums[j] > findNums[i]){
                result.push(nums[j]);
                flag = true;
                break;
            }  
        }

        if(!flag){
            result.push(-1);
        }
    }
    
    return result;
};