/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let l = 0;
    let r = k - 1;
    let first = true;
    let ans = [];
    let curMax = Number(-Infinity);
    while (r < nums.length) {
        if (first) {
            curMax = Number(-Infinity);
            for (let i = l; i <= r; i++) {
                curMax = Math.max(curMax, nums[i]);
            }
            ans.push(curMax);
            l++;
            r++;
            first = false;
            continue;
        }
        if (nums[r] > curMax) {
            curMax = nums[r];
            l++
            r++
            ans.push(curMax)
            continue
        }
        if (nums[l - 1] === curMax) {
            first = true;
            continue
        }
        ans.push(curMax)
        l++;
        r++;
    }
    return ans;
};


var maxSlidingWindow = function (nums, k) {
    let l = 0;
    let ans = [];
    for (let r = k; r < nums.length; r++) {
        ans.push(Math.max(...ans.slice(l, r)));
        l++;
    }
    return ans;
}