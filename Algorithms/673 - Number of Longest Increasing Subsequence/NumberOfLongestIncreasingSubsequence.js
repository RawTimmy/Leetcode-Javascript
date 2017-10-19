/**
 * @param {number[]} nums
 * @return {number}
 */
 
var findNumberOfLIS = function(nums) {
    var n = nums.length, res = 0, maxLength = 0;
    var len = [], cnt = [];
    
    for(var i = 0; i < n; i++){
        len[i] = cnt[i] = 1;
        
        for(var j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                if(len[i] == len[j] + 1){
                    cnt[i] += cnt[j];
                }else if(len[i] < len[j] + 1){
                    len[i] = len[j] + 1;
                    cnt[i] = cnt[j];
                }
            }
        }
        
        if(maxLength == len[i]){
            res+=cnt[i];
        }else if(maxLength < len[i]){
            maxLength = len[i];
            res = cnt[i];
        }
    }
    
    return res;
};