 /**
 * @param {number[]} nums
 * @return {number}
 */
 
var totalHammingDistance = function(nums) {
    var total = 0, n = nums.length;
    
    for(var j = 0; j < 32; j++){
        var count = 0;
        for(var i = 0; i < n; i++){
            count += (nums[i] >> j) & 1;
        }
        total += count*(n - count);
    }
    
    return total;
};