/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const n = s.length;
    const dp = [];
    for (let i = 0; i < n; i++) {
        const temp = [];
        for (let j = 0; j < n; j++) {
            temp.push(i === j);
        }
        dp.push(temp);
    }
    let [maxL, maxR] = [0, 0];
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1;
            if (len == 2) {
                dp[i][j] = s[i] == s[j];
            } else {
                dp[i][j] = s[i] == s[j] && dp[i + 1][j - 1];
            }
            if (dp[i][j]) {
                if (maxR - maxL < j - i) {
                    [maxL, maxR] = [i, j];
                }
            }
        }
    }
    return s.slice(maxL, maxR + 1);
};
// @lc code=end


// console.log(longestPalindrome("babad"));