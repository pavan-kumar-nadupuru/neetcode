/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let l = 0;
    let r = 0;
    let c = 0;
    while (r < nums.length - 1) {
        let far = 0;
        for (let i = l; i <= r; i++) {
            far = Math.max(far, i + nums[i]);
        }
        l = r + 1;
        r = far;
        c++;
    }
    return c;
};
// @lc code=end

