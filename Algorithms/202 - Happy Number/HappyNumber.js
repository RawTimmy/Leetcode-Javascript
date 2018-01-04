/**
 * @param {number} n
 * @return {boolean}
 */
 
var isHappy = function(n) {
    
    let digitalSquareNum = function(input){
        let sum = 0, temp;
        while(input){
            temp = input % 10;
            sum += temp * temp;
            input = Math.floor(input / 10);
        }
        return sum;
    }
    
    let slow = n, fast = n;
    
    do{
        slow = digitalSquareNum(slow);
        
        fast = digitalSquareNum(fast);
        fast = digitalSquareNum(fast);
    }while(slow != fast);
    
    if(slow == 1){
        return true;
    }else{
        return false;
    }
    
};