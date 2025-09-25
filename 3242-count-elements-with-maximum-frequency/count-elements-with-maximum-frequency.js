/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map = new Map()
    for(let num of nums){
        map.set(num,(map.get(num) || 0)+1)
    }
    console.log(map)
    let freq= Math.max(...map.values())
    console.log(freq)
    
    let count=0
    for(let val of map.values()){
        if(val===freq){
            count += val
        }
    }
    return count
    
}