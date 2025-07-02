/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if(nums.length<=2){
        return -1;
    }
    let arr=[]
    let min= Math.min(...nums);
    let max=Math.max(...nums);
    for(let i=0; i<nums.length;i++){
    if(min !== nums[i] && max!==nums[i]){
        arr.push(nums[i])
    }
    }
return arr[0]
    
};