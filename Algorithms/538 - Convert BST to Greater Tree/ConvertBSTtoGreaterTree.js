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

var convertBST = function(root) {
    var sum = 0;
    
    function convertOperation(tree){
        if(tree){
            convertOperation(tree.right);
            tree.val += sum;
            sum = tree.val;
            convertOperation(tree.left);
        }
    }
    
    convertOperation(root);
    return root;
};