/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    if (cost.length == 1) return cost[0];
    if (cost.length == 2) return Math.min(cost[0], cost[1]);
    let dp = new Array(cost.length).fill(null);
    const l = cost.length;
    dp[l - 1] = cost[l - 1];
    dp[l - 2] = cost[l - 2];
    for (let i = l - 3; i >= 0; i--) {
        dp[i] = cost[i] + Math.min(dp[i + 1], dp[i + 2]);
    }
    return Math.min(dp[0], dp[1]);
};
// @lc code=end

