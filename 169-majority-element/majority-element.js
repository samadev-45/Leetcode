/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj={}
    let majority = Math.floor(nums.length/2)
    for(let num of nums){
        obj[num] = (obj[num] || 0) +1;
        if(obj[num] > majority){
            
            return num;
        }
    }
}