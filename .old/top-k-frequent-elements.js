/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    nums.forEach(num => {
        map.set(num, map.has(num) ? map.get(num) + 1 : 1)
    })
    let keys = Array.from(map.keys())
    keys.sort((a,b) => map.get(b) - map.get(a))
    return keys.slice(0,k)
};

console.log(topKFrequent([1,1,1,2,2,3,3,3], 2))