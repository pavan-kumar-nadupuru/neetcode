/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (m.has(target - nums[i])) {
            return [i, m.get(target - nums[i])];
        }
        m.set(nums[i], i)
    }
};

/*

0 -> 1


*/


console.log(twoSum([1, 2, 3, 4], 5))