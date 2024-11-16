class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] == 0) {
                    bfs(i, j, 0);
                }
            }
        }
        return grid;
        function bfs(r, c) {
            let q = [[r, c, 0]];
            while (q.length) {
                let [cr, cc, cd] = q.shift();
                for (let [dx, dy] of directions) {
                    let nr = cr + dx;
                    let nc = cc + dy;
                    let nd = cd + 1;
                    if (nr < 0 || nc < 0 || nr >= ROWS || nc >= COLS || grid[nr][nc] == -1 || grid[nr][nc] < cd) continue;
                    grid[nr][nc] = nd;
                    q.push([nr, nc, nd]);
                }
            }
        }
    }
}


const sol = new Solution();
sol.islandsAndTreasure([[2147483647, -1, 0, 2147483647], [2147483647, 2147483647, 2147483647, -1], [2147483647, -1, 2147483647, -1], [0, -1, 2147483647, 2147483647]])