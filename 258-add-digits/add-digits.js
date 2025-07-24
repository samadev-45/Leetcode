/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let total = num.toString().split("").map(Number);
    let sum = 0;
    let final = 0;
    let value = 0;
    for(let i=0; i<total.length;i++){
        sum +=total[i];
    }

    
    let valuesplit = sum.toString().split("").map(Number);
    for(let i=0; i<valuesplit.length; i++){
        value += valuesplit[i];
    }

    if(value.toString().length >1){
        let finalsplit = value.toString().split("").map(Number);
        for(let i=0; i<finalsplit.length; i++){
            final += finalsplit[i];
        }
        return final;

    }
    return value
};