/**
 *  @RawTimmy
 */

 /**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    var rowLength = nums.length;
    var colLength = nums[0].length;
    var totalEle1 = rowLength * colLength;
    var totalEle2 = r*c;
    var queue =[];
    var result = [];
    var i,j;
    
    if(totalEle1 !== totalEle2){
    	return nums;
    }

    for(i = 0;i < rowLength;i++){
        for(j = 0;j< colLength;j++){
            queue.push(nums[i][j]);
        }
    }
    
    for(i = 0;i < r;i++){
        result[i]=[];
        for(j = 0;j < c;j++){
            result[i][j] = queue.shift();
        }
    }
    return result;
    
};