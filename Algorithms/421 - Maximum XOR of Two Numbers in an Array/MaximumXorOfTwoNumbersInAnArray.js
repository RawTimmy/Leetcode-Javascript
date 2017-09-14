/**
 * @param {number[]} nums
 * @return {number}
 */
 
var findMaximumXOR = function(nums) {
    var res = 0, flag = 0;
    for(var i = 31; i >= 0; i--){
        
        var hash = new Set();
        flag |= (1 << i);
        
        nums.forEach(function(item){
            hash.add(item & flag);
        });
        
        var temp = res | (1 << i);
        
        for(let item of hash){
            if(hash.has(temp ^ item)){
                res = temp;
            }
        }  
    }
    
    return res;
};