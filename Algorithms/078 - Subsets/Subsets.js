/**
 * @RawTimmy
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
var subsets = function(nums) {
    var result = [[]];
    var numsLength = nums.length;
    
    if(numsLength === 0){
        return result;
    }
    
    for(var i = 0; i < numsLength; i++){
        var resLength = result.length;
        
        var n = nums[i];
        var arr = [n];
        
        for(var j = 0; j < resLength; j++){
            var tempArr = result[j].concat(arr);
            result.push(tempArr);
        }
    }
    return result;
};