/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
  let sett=new Set()
  for(let num of nums){
     if(sett.has(num)){
      return true;
     }
      sett.add(num)
     
     }
     return false;
  
    }