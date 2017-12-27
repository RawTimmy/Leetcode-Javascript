/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 
var selfDividingNumbers = function(left, right) {
    let res = [];
    let check = true;
    
    while(left <= right){
        let temp = left.toString();
        for(let i = 0; i < temp.length; i++){
            let temp2 = parseInt(temp[i]); 
            if(temp2 == 0 || left % temp2 > 0){
                check = false;
            }
        }
        
        if(check == true){
            res.push(left);
        }
        
        check = true;
        left++;
    }
    return res;
};
