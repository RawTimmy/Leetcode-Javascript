 /**
 * @param {number} num
 * @return {string[]}
 */

var readBinaryWatch = function(num) {
    var hours = [1,2,4,8];
    var minutes = [1,2,4,8,16,32];
    var result = [];
    
    function dfs(n,h,m,hoursOp,minutesOp){
        
        if(hoursOp >= 12 || minutesOp >= 60){
            return;
        }
        
        if(n === 0){
            var ansStr = hoursOp + ":";
            ansStr += (minutesOp < 10 ? "0"+ minutesOp : minutesOp);
            result.push(ansStr);
            return;
        }
        
        for(var i = h; i < 4; i++){
            dfs(n-1,i+1,m,hoursOp+hours[i],minutesOp);
        }
        
        for(var j = m; j < 6; j++){
            dfs(n-1,h,j+1,hoursOp,minutesOp+minutes[j]);
        }
    }
    
    dfs(num,0,0,0,0);
    return Array.from(new Set(result));
};