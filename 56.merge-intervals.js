/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let ans = [];
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length; i++) {
        let [ns, ne] = intervals[i];
        if (!ans.length) {
            ans.push([ns, ne]);
            continue;
        }
        let [ts, te] = ans[ans.length - 1];
        if (te < ns || ne < ts) {
            ans.push([ns, ne]);
        } else {
            ans.pop();
            ans.push([Math.min(ts, ns), Math.max(te, ne)]);
        }
    }
    return ans;
};
// @lc code=end

