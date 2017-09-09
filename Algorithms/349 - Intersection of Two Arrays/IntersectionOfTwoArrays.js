/**
 * @RawTimmy
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 
var intersection = function(nums1, nums2) {
    if(nums1.length == 0 || nums2.length == 0){
        return [];
    }
    
    var result = [];
    let mySet = new Set(nums1);
    
    for(var i = 0; i < nums2.length; i++){
        if(mySet.has(nums2[i])){
            result.push(nums2[i]);
            mySet.delete(nums2[i]);
        }
    }
    return result;
};