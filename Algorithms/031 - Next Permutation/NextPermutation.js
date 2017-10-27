/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 
var nextPermutation = function(nums) {
    
    function reverseArr(arr, start){
        let i = start, j = arr.length - 1;
        while(i < j){
            swap(arr, i, j);
            i++;
            j--;
        }
    };
    
    function swap(arr,input1,input2){
        let temp = arr[input1];
        arr[input1] = arr[input2];
        arr[input2] = temp;
    };
    
    let i = nums.length - 2;
    
    while(i >= 0 && nums[i+1] <= nums[i]){
        i--;
    }
    
    if(i >= 0){
        let j = nums.length - 1;
        while(j >= 0 && nums[j] <= nums[i]){
            j--;
        }
        swap(nums,i,j);
    }
    
    reverseArr(nums, i+1);
    
};