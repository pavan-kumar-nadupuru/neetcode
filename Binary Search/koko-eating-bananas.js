function check(arr, x, hrs) {
    let tot = 0;
    for (let a of arr) {
        tot += Math.ceil(a / x);
        if (tot > hrs)
            return false;
    }
    return true;
}
var minEatingSpeed = function (piles, h) {
    let maxVal = Math.max(...piles);
    let start = 0;
    let end = maxVal + 1;
    let ans = maxVal;
    while (start < end) {
        let mid = ~~((start + end) / 2);
        if (check([...piles], mid, h)) {
            ans = Math.min(ans, mid);
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return ans;

}

console.log(minEatingSpeed([30, 11, 23, 4, 20], 6))