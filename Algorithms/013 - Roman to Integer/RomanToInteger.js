/**
 * @param {string} s
 * @return {number}
 */
 
var romanToInt = function(s) {
    let res = 0;
    if(s.indexOf("IV")!= -1) res-=2;
    if(s.indexOf("IX")!= -1) res-=2;
    if(s.indexOf("XL")!= -1) res-=20;
    if(s.indexOf("XC")!= -1) res-=20;
    if(s.indexOf("CD")!= -1) res-=200;
    if(s.indexOf("CM")!= -1) res-=200;
    
    for(let i = 0;i < s.length; i++){
        if(s[i] == "M") res+=1000;
        if(s[i] == "D") res+=500;
        if(s[i] == "C") res+=100;
        if(s[i] == "L") res+=50;
        if(s[i] == "X") res+=10;
        if(s[i] == "V") res+=5;
        if(s[i] == "I") res+=1;
    }
    
    return res;
};