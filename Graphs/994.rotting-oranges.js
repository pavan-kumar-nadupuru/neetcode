/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    let time = 0;
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];
    let q = [];
    let fresh = 0;
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] == 1) {
                fresh++;
            }
            if (grid[i][j] == 2) {
                q.push([i, j]);
            }
        }
    }
    while (fresh && q.length) {
        time++;
        let curRotten = q.length;
        for (let i = 0; i < curRotten; i++) {
            let [cx, cy] = q.shift();
            for (let [dx, dy] of directions) {
                let [nx, ny] = [cx + dx, cy + dy];
                if (nx < 0 || ny < 0 || nx >= ROWS || ny >= COLS ||
                    grid[nx][ny] != 1
                ) continue;
                grid[nx][ny] = 2;
                fresh--;
                q.push([nx, ny]);
            }
        }
    }
    return fresh ? -1 : time;
};
// @lc code=end

console.log(orangesRotting([[0, 2, 2]]))
