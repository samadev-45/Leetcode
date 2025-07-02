/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    
    let counts=0;
    let nums=num.toString();
    for(let i=0; i<nums.length; i++){
        if(num % nums[i]==0){
            counts++;
        }
    }
            return counts

};