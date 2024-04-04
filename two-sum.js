/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let ind in nums){
        if(map.has(target - nums[ind])){
            return [ind, map.get(target - nums[ind])]
        }
        map.set(nums[ind], ind)
    }
};