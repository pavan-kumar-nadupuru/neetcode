/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const ROWS = board.length;
    const COLS = board[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    // for (let c = 0; c < COLS; c++) {
    //     if (board[0][c] == "O") dfs(0, c);
    //     if (board[ROWS - 1][c] == "O") dfs(ROWS - 1, c);
    // }
    // for (let r = 0; r < ROWS; r++) {
    //     if (board[r][0] == "O") dfs(r, 0);
    //     if (board[r][ROWS - 1] == "0") dfs(r, ROWS - 1);
    // }
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (r == 0 || c == 0 || r == ROWS - 1 || c == COLS - 1) {
                dfs(r, c);
            }
        }
    }

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= ROWS || c >= COLS) return;
        if (board[r][c] != "O") return;
        board[r][c] = ".";
        for (let [dx, dy] of directions) {
            dfs(r + dx, c + dy);
        }
    }
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (board[i][j] == ".") {
                board[i][j] = "O"
            } else if (board[i][j] == "O") {
                board[i][j] = "X"

            }
        }
    }
};
// @lc code=end

