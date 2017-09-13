/**
 * @RawTimmy
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 
var missingNumber = function(nums) {
    var res = nums.length;
    for(var i = 0; i < nums.length; i++){
        res ^= nums[i];
        res ^= i;
    }
    return res;
};