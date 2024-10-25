/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let ans = 0;
    let leftMax = [];
    let rightMax = [];
    let lm = 0;
    let rm = 0;
    for (let a of height) {
        lm = Math.max(lm, a);
        leftMax.push(lm);
    }
    for (let i = height.length - 1; i >= 0; i--) {
        rm = Math.max(rm, height[i]);
        rightMax.push(rm)
    }
    rightMax = rightMax.reverse();
    for (let i = 0; i < height.length; i++) {
        ans += (Math.min(leftMax[i], rightMax[i]) - height[i])
    }

    return ans;
};


console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))