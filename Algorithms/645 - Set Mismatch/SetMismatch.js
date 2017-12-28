/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
var findErrorNums = function(nums) {
    // missing = actualSum - rawSum + duplicate;
    let actualSum = nums.length * (1 + nums.length) / 2;
    let duplicate;
    
    for(let i = 0; i < nums.length; i++){
        let raw = Math.abs(nums[i]);
        actualSum -= raw;
        
        if(nums[raw - 1] < 0){
            duplicate = raw;
        }else{
            nums[raw - 1] *= -1;
        }
    }
    return [duplicate, actualSum+duplicate];
};