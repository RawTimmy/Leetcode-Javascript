/**
 * @RawTimmy
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 
var minMoves = function(nums) {
    var target = Math.min.apply(null,nums);
    var sum = 0;
    for(var i = 0; i< nums.length; i++){
        sum += nums[i] - target;
    }
    return sum;
};