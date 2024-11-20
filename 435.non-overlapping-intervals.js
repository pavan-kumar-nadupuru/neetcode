/*
 * @lc app=leetcode id=435 lang=javascript
 *
 * [435] Non-overlapping Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    let count = 0;
    intervals.sort((a, b) => a[0] - b[0]);
    let [_ps, pe] = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        let [cs, ce] = intervals[i];
        if (cs < pe) {
            count++;
            pe = Math.min(pe, ce);
        } else {
            pe = ce;
        }
    }
    return count;
};
// @lc code=end
console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]))
