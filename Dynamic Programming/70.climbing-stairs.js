/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    let prev = 2;
    let secPrev = 1;
    let cur;
    for (let i = 3; i < n + 1; i++) {
        cur = prev + secPrev;
        secPrev = prev;
        prev = cur;
    }
    return cur;
};
// @lc code=end

