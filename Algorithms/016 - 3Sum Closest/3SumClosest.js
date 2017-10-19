/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 
var threeSumClosest = function(nums, target) {
    var n = nums.length;
    
    nums.sort(function(a,b){
        return a - b;
    });
    
    var res = nums[0] + nums[1] + nums[2];
    
    for(var i = 0; i < n - 2; i++){
        var lo = i + 1, hi = n - 1;
        while(lo < hi){
            var sum = nums[i] + nums[lo] + nums[hi];
            if(sum == target){
                return target;
            }else if(sum < target){
                lo++;
            }else{
                hi--;
            }
            if(Math.abs(sum - target) < Math.abs(res - target)){
                res = sum;
            }
        }
    }
    return res;
};