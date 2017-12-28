/**
 * @param {number[]} nums
 * @return {number}
 */
 
var maximumProduct = function(nums) {
    nums.sort(function(a,b){
        return a-b;
    });
    
    let l = nums.length;
    return Math.max(nums[l-1]*nums[l-2]*nums[l-3],nums[0]*nums[1]*nums[l-1]);
};