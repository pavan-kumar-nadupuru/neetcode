/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let arr = [[new Map(), new Map(), new Map()], [new Map(), new Map(), new Map()], [new Map(), new Map(), new Map()]];
    for (let i = 0; i < 9; i++) {
        let rowMap = new Map();
        let colMap = new Map();
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === "." && board[j][i] === ".")
                continue
            if (rowMap.has(board[i][j]) || colMap.has(board[j][i])) {
                return false;
            } else {
                if (board[i][j] !== ".")
                    rowMap.set(board[i][j], true);
                if (board[j][i] !== ".")
                    colMap.set(board[j][i], true);
            }
            if (board[i][j] === ".")
                continue
            if (arr[Math.floor(i / 3)][Math.floor(j / 3)].has(board[i][j]))
                return false
            arr[Math.floor(i / 3)][Math.floor(j / 3)].set(board[i][j], true)
        }
    }

    // for (let i = 0; i < 9; i++) {
    //     for (let j = 0; j < 9; j++) {
    //         if (board[i][j] === ".")
    //             continue
    //         if (arr[Math.floor(i / 3)][Math.floor(j / 3)].has(board[i][j]))
    //             return false
    //         arr[Math.floor(i / 3)][Math.floor(j / 3)].set(board[i][j], true)
    //     }
    // }

    // After all validations
    return true;
};


console.log(isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]))