/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    let maxArea = 0;
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    function dfs(r, c) {
        let area = 1;
        grid[r][c] = 0;
        for (let [dx, dy] of directions) {
            let nr = r + dx;
            let nc = c + dy;
            if (nr < 0 || nc < 0 || nr >= ROWS || nc >= COLS || grid[nr][nc] === 0) {
                continue;
            }
            area += dfs(nr, nc);
        }
        return area;
    }

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, dfs(i, j));
            }
        }
    }
    return maxArea;
};
// @lc code=end


console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
));
