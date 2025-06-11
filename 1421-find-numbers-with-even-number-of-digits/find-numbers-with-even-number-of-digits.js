/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count=0;
for(n of nums){
  let str =String(n).split("");  
  if(str.length%2==0){
    count++;
  }
  
    
}
return count;
}