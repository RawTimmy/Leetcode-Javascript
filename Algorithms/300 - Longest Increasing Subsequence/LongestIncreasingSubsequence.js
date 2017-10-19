/**
 * @param {number[]} nums
 * @return {number}
 */
 
function binarySearch(arr,target){
    var start = 0, end = arr.length - 1;
    
    while(start <= end){
        var mid = ~~((start + end) >> 1);
        if(arr[mid] >= target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    
    return end;
}

var lengthOfLIS = function(nums){
    var res = [];
    
    nums.forEach(function(item){
        var index = binarySearch(res,item) + 1;
        if(res[index] === undefined){
            res[index] = item;
        }else{
            res[index] = Math.min(res[index],item);
        }
    });
    
    return res.length;
}