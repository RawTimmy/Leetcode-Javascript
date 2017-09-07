/**
 *  @RawTimmy
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
 * @param {number} k
 * @return {boolean}
 */
// var hashOperation = function(root,k){
//     var set = new Set();
//     return findTarget(root,k,set);
// }

var findTarget = function(root, k) {
    
    function hashOperation(root,k,hash){
        if(root == null){return false;}
        if(hash.indexOf(k - root.val) !== -1){return true;}
        hash.push(root.val);
        return hashOperation(root.left, k, hash) || hashOperation(root.right,k,hash);
    }
    
    var hash = [];
    return hashOperation(root,k,hash);
};