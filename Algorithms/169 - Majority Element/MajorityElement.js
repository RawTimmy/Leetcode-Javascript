/**
 * @RawTimmy
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    var n = nums.length;
    
    if(n === 0){
        return 0;
    }
    
    var majorNum = nums[0]，count = 1;

    for(var i = 1; i < n; i++){
        if(nums[i] == majorNum){
            count++;
        }else if(count == 0){
            majorNum = nums[i];
        }else{
            count--;
        }
    }
    
    return majorNum;
};