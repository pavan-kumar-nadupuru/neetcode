/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let prevSum = [1];
    let curSum = 1;
    for (let i = 1; i < nums.length; i++) {
        prevSum.push(curSum * nums[i - 1]);
        curSum = curSum * nums[i - 1]
    }
    let postSum = [1];
    curSum = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        postSum.splice(0, 0, curSum * nums[i + 1])
        curSum = curSum * nums[i + 1];
    }
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(prevSum[i] * postSum[i])

    }
    return ans;
};

console.log(productExceptSelf([]))










/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//     let prevSum = [1];
//     let curSum = 1;
//     for (let i = 1; i < nums.length; i++) {
//         prevSum.push(curSum * nums[i - 1]);
//         curSum = curSum * nums[i - 1]
//     }
//     let postSum = [1];
//     curSum = 1;
//     for (let i = nums.length - 2; i >= 0; i--) {
//         prevSum[i] = prevSum[i] * nums[i + 1] * curSum
//         curSum = curSum * nums[i + 1];
//     }
//     return prevSum;
// };

// console.log(productExceptSelf([1, 2]))