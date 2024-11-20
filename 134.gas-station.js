/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    if (gas.reduce((p, c) => p + c, 0) < cost.reduce((p, c) => p + c, 0)) return -1;
    let res = 0;
    let tot = 0;
    gas.map((g, ind) => {
        tot += (g - cost[ind]);
        if (tot < 0) {
            tot = 0;
            res = ind + 1;
        }
    });
    return res;
};
// @lc code=end

