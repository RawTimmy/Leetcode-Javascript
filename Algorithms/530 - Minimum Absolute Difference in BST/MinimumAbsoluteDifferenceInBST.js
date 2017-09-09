/**
 * @RawTimmy
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 
/**
 * @param {TreeNode} root
 * @return {number}
 */

var orderOperation = function(root){
    if(root.left){
    	orderOperation(root.left);
    }
    result.push(root.val);
    if(root.right){
    	orderOperation(root.right);
    }
    return result;
}

var getMinimumDifference = function(root) {
    var result = [];
    
    function orderOperation(root){
        if(root.left) orderOperation(root.left);
        result.push(root.val);
        if(root.right) orderOperation(root.right);
        return result;
    }
    
    result = orderOperation(root);

    var res = result[1] - result[0];

    for(var i = 1; i < result.length - 1;i++){
        if(result[i+1] - result[i] < res){
            res = result[i+1] - result[i];
        }
    }
    
    return res;
};