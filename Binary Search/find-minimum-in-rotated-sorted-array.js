/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function (nums) {
//     let start = 0;
//     let end = nums.length;
//     let ans = nums[0];
//     while (start < end) {
//         if (nums[start] < nums[end - 1]) {
//             ans = Math.min(ans, nums[start]);
//             return ans;
//         }
//         let mid = ~~((start + end) / 2);
//         ans = Math.min(ans, nums[mid]);
//         if (nums[mid] >= nums[start]) {
//             start = mid + 1;
//         } else {
//             end = mid;
//         }
//     }
//     return ans;
// };

var findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let m = ~~((l + r) / 2);
        if (nums[r] > nums[m]) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return nums[~~((l + r) / 2)];
}

console.log(findMin([8, 9, 1, 2, 3, 4, 5, 6, 7]));


// 8,9,1,2,3,4,5,6,7
// 0,1,2,3,4,5,6,7,8