/**
 * @RawTimmy
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
 
var singleNumber = function(nums) {
    var temp = [];
    var result = [];
    for(var i = 0; i < nums.length; i++){
        if(!temp[nums[i]]){
            temp[nums[i]] = 1;
        }else{
            temp[nums[i]]++;
        }
    }
    
    for(i = 0; i < nums.length; i++){
        if(temp[nums[i]] == 1){
            result.push(nums[i]);
        }
    }
    return result;
};