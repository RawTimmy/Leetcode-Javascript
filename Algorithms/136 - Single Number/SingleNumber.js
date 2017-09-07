/**
 *  @RawTimmy
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    var a = 0;
    var arrLength = nums.length;
    for(var i = 0; i < arrLength;i++){
        a ^= nums[i]; // XOR
    }
    return a;
};