// var longestConsecutive = function (nums) {
//     if (nums.length === 0)
//         return 0
//     nums = nums.sort((a, b) => a - b);
//     let longest = 1;
//     let temp = 1;
//     console.log(nums)
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] - nums[i - 1] == 1) {
//             temp += 1;
//         }
//         else {
//             if (nums[i] !== nums[i - 1])
//                 temp = 1;
//         }

//         longest = Math.max(longest, temp);
//     }
//     return longest
// };


var longestConsecutive = function (nums) {
    const nS = new Set(nums);
    let ans = 0;
    for (const item of nS) {
        let temp = 0;
        if (nS.has(item - 1)) {
            continue;
        }
        while (true) {
            temp += 1;
            if (!nS.has(item + temp)) {
                break;
            }
        }
        ans = Math.max(ans, temp)
    }
    return ans;
};

console.log(longestConsecutive([200, 1, 3, 100, 2, 4]))