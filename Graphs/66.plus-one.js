/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        let s = digits[i] + carry;
        if (s == 10) {
            carry = 1;
            digits[i] = 0;
        } else {
            carry = 0;
            digits[i] = s;
            break;
        }
    }
    if (carry != 0) digits.unshift(carry);
    return digits;
};
// @lc code=end

