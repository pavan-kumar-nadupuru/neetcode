var find132pattern = function (nums) {
    let s = [];
    let curMin = nums[0];
    for (let n of nums) {
        while (s.length > 0 && n >= s[s.length - 1][0]) {
            s.pop();
        }
        if (n < s[s.length - 1][1]) {
            return true;
        }
        s.push([n, curMin]);
        curMin = Math.min(curMin, n);
    }
}