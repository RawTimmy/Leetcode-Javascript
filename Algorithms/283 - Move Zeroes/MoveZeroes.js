/**
 *  @RawTimmy
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 
var moveZeroes = function(nums) {
    var n = nums.length;
    var count = 0;
    
    for(var i = 0; i < n; i++){
        if(nums[i] != 0){
            var temp = nums[count];
            nums[count] = nums[i];
            nums[i] = temp;
            count++;
        }
    }
};