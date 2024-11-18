/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    const n = s.length;
    const dp = [];
    let ans = [];
    for (let i = 0; i < n; i++) {
        const temp = [];
        for (let j = 0; j < n; j++) {
            if (i == j) {
                temp.push(true);
                ans.push(s.slice(i, j + 1));
            } else {
                temp.push(false);
            }
        }
        dp.push(temp);
    }
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1;
            if (len == 2) {
                dp[i][j] = s[i] == s[j];
            } else {
                dp[i][j] = s[i] == s[j] && dp[i + 1][j - 1];
            }
            if (dp[i][j]) {
                ans.push(s.slice(i, j + 1));
            }
        }
    }
    return ans.length;
};
// @lc code=end

