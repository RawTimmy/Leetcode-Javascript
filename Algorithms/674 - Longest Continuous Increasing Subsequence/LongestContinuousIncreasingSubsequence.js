/**
 * @param {number[]} nums
 * @return {number}
 */
 
var findLengthOfLCIS = function(nums) {
    var res = 0, count = 0;
    
    for(var i = 0; i < nums.length; i++){
        if(i == 0 || nums[i-1] < nums[i]){
            res = Math.max(res,++count);
        }else{
            count = 1;
        }
    }
    
    return res;
};