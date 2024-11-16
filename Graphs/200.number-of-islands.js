/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const ROWS = grid.length;
    const COLS = grid[0].length;
    function dfs(r, c) {
        grid[r][c] = "0";
        for (let [dx, dy] of directions) {
            let nr = r + dx;
            let nc = c + dy;
            if (nr < 0 || nc < 0 || nr >= ROWS || nc >= COLS || grid[nr][nc] === "0") continue
            dfs(nr, nc);
        }
    }
    let islands = 0;
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === "1") {
                islands++;
                dfs(i, j);
            }
        }
    }
    return islands;
};
// @lc code=end

