/**
 *  @RawTimmy
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var n = nums.length;
    var result = [];
    for(var i = 0; i < n; i++){
        var index = Math.abs(nums[i]) - 1;
        if(nums[index] > 0){
            nums[index] *= -1;
        }
    }
    
    for(var i = 0; i < n; i++){
        if(nums[i] > 0){
            result.push(i+1);
        }
    }
    return result;
};

