/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let ans = [];
    let cols = new Set();
    let pos = new Set();
    let neg = new Set();
    function bt(i, board) {
        if (i === n) {
            let temp = board.map(r => r.concat())
            ans.push(temp.concat());
            return;
        }
        for (let j = 0; j < n; j++) {
            if (cols.has(j) || pos.has(i + j) || neg.has(i - j)) continue;
            board[i][j] = "Q";
            cols.add(j)
            pos.add(i + j);
            neg.add(i - j);
            bt(i + 1, board.concat());
            board[i][j] = ".";
            cols.delete(j);
            pos.delete(i + j);
            neg.delete(i - j);
        }
    }
    // let board = new Array(n).fill(new Array(n));
    let board = [];
    for (let t = 0; t < n; t++) {
        board.push(new Array(n).fill("."));
    }
    bt(0, board);
    return ans;
};

console.log(solveNQueens(4));