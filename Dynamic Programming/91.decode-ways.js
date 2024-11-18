/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    const n = s.length;
    if (s[0] == "0") return 0;
    if (n == 1) return 1;
    const dp = new Array(n).fill(0);
    dp[0] = 1;
    dp[1] = s[1] !== "0" ? 1 : 0;
    const temp = Number(s.slice(0, 2));
    if (temp >= 10 && temp <= 26) {
        dp[1] += 1;
    }
    for (let i = 2; i < n; i++) {
        if (s[i] !== "0")
            dp[i] += dp[i - 1];
        let two = Number(s.slice(i - 1, i + 1));
        if (two >= 10 && two <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[n - 1];
};
// @lc code=end

console.log(numDecodings("10"));