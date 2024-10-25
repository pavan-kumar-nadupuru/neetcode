let arr = [-1, 0, 1, 2, -1, -4]
arr = [-2, 0, 0, 2, 2]

var threeSum = function (nums) {
    let ans = [];
    nums.sort((a, b) => a - b);
    for (i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1])
            continue
        let target = nums[i] === 0 ? 0 : -1 * nums[i];
        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            let tm = nums[start] + nums[end]
            if (tm === target) {
                ans.push([-(target), nums[start], nums[end]]);
                start++;
                while (nums[start] === nums[start - 1] && start < end) {
                    start++;
                }
            } else {
                if (tm > target) {
                    end--;
                } else {
                    start++;
                }
            }
        }
    }
    return ans;
}


console.log(threeSum(arr));