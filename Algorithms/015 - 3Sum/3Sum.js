/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
var threeSum = function(nums) {
    var n = nums.length, res = [];
    
    nums.sort(function(a,b){
        return a-b;
    });
    
    for(var i = 0; i+2 < n; i++){
        if(i > 0 && nums[i] == nums[i-1]){
            continue;
        }
        var lo = i + 1, hi = n - 1;
        var target = -nums[i];
        
        while(lo < hi){
            if(nums[lo] + nums[hi] == target){
                res.push([nums[i],nums[lo],nums[hi]]);
                lo++;
                hi--;
                while(lo < hi && nums[lo] == nums[lo - 1]) lo++;
                while(lo < hi && nums[hi] == nums[hi + 1]) hi--;
            }else if(nums[lo] + nums[hi] > target){
                hi--;
            }else{
                lo++;
            }
        }
    }
    
    return res;
};