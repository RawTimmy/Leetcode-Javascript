/**
 *  @RawTimmy
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var total = 0;
    var num2 = nums.sort(function(a,b){
        return a - b;
    });
    for(var i = 0;i < num2.length;i += 2){
        total += num2[i];
    }
    return total;
};