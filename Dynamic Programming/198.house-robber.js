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
var rob = function (nums) {
    const n = nums.length;
    let rob1 = 0;
    let rob2 = 0;
    for (let num of nums) {
        let cur = Math.max(rob1 + num, rob2);
        rob1 = rob2;
        rob2 = cur;
    }
    return rob2;
};
// @lc code=end

