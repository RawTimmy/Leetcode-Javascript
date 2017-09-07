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
 * @return {number[]}
 */

var averageOfLevels = function(root) {
    var result = [];
    var queue = [];
    queue.push(root);
    
    while(queue.length > 0){
        var sum = 0, count = 0;
        var temp = [];
        
        while(queue.length > 0){
            var n = queue.shift();
            sum += n.val;
            count++;
            
            if(n.left != null){
                temp.push(n.left);
            }
            if(n.right != null){
                temp.push(n.right);
            }
            
        }
        queue = temp;
        result.push(1.0* sum/count);
    }
    return result;
};