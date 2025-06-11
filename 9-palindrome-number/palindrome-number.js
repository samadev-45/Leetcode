/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y=""
    let num=x.toString();
    for(i=num.length-1; i>=0; i--){
        y+=num[i];

        
    }if(x==y){
        return true;
    }else{
        return false;
    }
    
};