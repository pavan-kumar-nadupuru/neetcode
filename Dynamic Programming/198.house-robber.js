/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function (nums) {
//     let curMax = 0;
//     function bt(i, cur) {
//         if (i >= nums.length) {
//             curMax = Math.max(curMax, cur);
//             return;
//         }
//         bt(i + 2, cur + nums[i]);
//         bt(i + 1, cur);
//     }
//     bt(0, 0);
//     return curMax;
// };

var rob = function (nums) {
    let n = nums.length;
    if (!n) return -1;
    let dp = new Array(n);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }
    return dp[n - 1];
}
// @lc code=end
