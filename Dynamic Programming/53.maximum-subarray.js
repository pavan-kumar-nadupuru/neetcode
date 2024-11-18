/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let curSum = nums[0];
    let ans = nums[0];
    for (let i = 1; i < nums.length; i++) {
        curSum = curSum <= 0 ? nums[i] : curSum + nums[i];
        ans = Math.max(ans, curSum);
    }
    return ans;
};
// @lc code=end

