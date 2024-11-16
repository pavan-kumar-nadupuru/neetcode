/*
 * @lc app=leetcode id=581 lang=javascript
 *
 * [581] Shortest Unsorted Continuous Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    let first = null;
    let last = null;
    if (nums.length < 2) {
        return 0;
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            first = nums[i - 1];
            break;
        }
    }
    if (first === null) return 0;
    for (let i = nums.length - 2; i > -1; i--) {
        if (nums[i] > nums[i + 1]) {
            last = nums[i + 1];
            break;
        }
    }
    return nums.lastIndexOf(last) - nums.indexOf(first) + 1;
};
// @lc code=end

// console.log(findUnsortedSubarray([2, 1]))