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
 * @return {TreeNode}
 */

var invertTree = function(root) {
    if(root == null){
        return null;
    }
    
    var left = new TreeNode();
    var right = new TreeNode();
    left = invertTree(root.left);
    right = invertTree(root.right);
    root.right = left;
    root.left = right;
    return root;
};