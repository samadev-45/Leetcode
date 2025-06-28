/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const newdata = new Set();
    for(let i=0; i<nums.length;i++){
        if(newdata.has(nums[i])){
            return true
        }
        newdata.add(nums[i])
    }
    return false  
};