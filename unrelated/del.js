/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][j] = "."
                for (let [x, y] of directions) {
                    let c = 1;
                    let start = i;
                    let end = j;
                    while (start < rows && end < cols && start >= 0 && end >= 0) {
                        matrix[start][end] = ".";
                        start = start + (c * x);
                        end = end + (c * y);
                        c++;
                    }
                }
            }
        }
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == ".") {
                matrix[i][j] = 0;
            }
        }
    }
    // return matrix;
};


console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));