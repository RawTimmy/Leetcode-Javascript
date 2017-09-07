/**
 *  @RawTimmy
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
 
var findMaxConsecutiveOnes = function(nums) {
    var result = 0, count = 0;
    var arrLength = nums.length;
    
    for(var i = 0; i < arrLength; i++){
        if(nums[i] == 1){
            count++;
        }else if(nums[i] == 0 && count !== 0){
            if(count > result){
                result = count;
            }  
            count = 0; 
        }
    }

    return count>result ? count : result;
};