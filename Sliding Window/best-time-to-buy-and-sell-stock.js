var maxProfit = function (prices) {
    let l = 0;
    let r = 1;
    let ans = 0;
    while (r < prices.length) {
        ans = Math.max(ans, prices[r] - prices[l]);
        if (prices[r] < prices[l]) {
            l = r;
            r++;
        } else {
            r++;
        }
    }
    return ans;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))