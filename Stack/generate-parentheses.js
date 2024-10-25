/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let ans = [];
    backtrack(n, n, "")
    function backtrack(open, close, path) {
        if (open === 0 && close === 0) {
            ans.push(path);
            return;
        }
        if (open < close && close > 0) {
            backtrack(open, close - 1, path + ')')
        }
        if (open > 0)
            backtrack(open - 1, close, path + '(')
    }
    return ans;
};

console.log(generateParenthesis(3))