/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = [0];
    for (let i = 1; i <= amount; i++) {
        let res = Infinity;
        for (let coin of coins) {
            if (i - coin >= 0) {
                res = Math.min(res, 1 + dp[i - coin]);
            }
        }
        dp[i] = res;
    }
    return dp[amount] == Infinity ? -1 : dp[amount];
};
// @lc code=end

console.log(coinChange([1, 2, 3], 11));