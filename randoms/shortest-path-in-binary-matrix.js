var shortestPathBinaryMatrix = function (grid) {
    let n = grid.length;
    let card = [[1, 1], [-1, 1], [1, - 1], [-1, -1], [-1, 0], [0, 1], [1, 0], [0, -1]];
    if (grid[0][0] != 0 || grid[grid.length - 1][grid.length - 1] != 0) {
        return -1;
    }
    let seen = new Set("0...0");
    let q = [[0, 0, 0]]
    while (q.length > 0) {
        [x, y, cur] = q.shift();
        if (x === n - 1 && y === n - 1) {
            return cur + 1;
        }
        for (let [a, b] of card) {
            if (x + a < 0 || x + a >= n || y + b < 0 || y + b >= n) {
                continue;
            }
            if (grid[x + a][y + b] === 0 && !seen.has(`${x + a}...${y + b}`)) {
                q.push([x + a, y + b, cur + 1]);
                seen.add(`${x + a}...${y + b}`);
            }
        }
    }
    return -1;
};

console.log(shortestPathBinaryMatrix([[0, 0, 0], [1, 0, 0], [1, 1, 0]]));