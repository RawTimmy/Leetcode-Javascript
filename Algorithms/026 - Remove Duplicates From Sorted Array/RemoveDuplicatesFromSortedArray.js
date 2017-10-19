/**
 * @RawTimmy
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
 
var removeDuplicates = function(nums) {
    let count = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] == nums[i-1]){
            count++
        }else{
            nums[i-count] = nums[i];
        }
    }
    return nums.length - count;
};