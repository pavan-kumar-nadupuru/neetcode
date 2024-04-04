/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = []
    let columns = []
    let sections = []
    board.forEach(_val => columns.push([]))
    board.forEach(_val => sections.push([]))
    for(let row of board){
        rows.push(row.filter(val => val != '.'))
        for(let ele in row){
            if(row[ele] != '.'){
                columns[ele].push(row[ele])
            }
        }
    }
    for(let row of rows){
        if(row.length != new Set(row).size){
            return false
        }
    }
    for(let column of columns){
        if(column.length != new Set(column).size){
            return false
        }
    }
    for(let i=0; i< board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j] != '.')
                sections[Math.floor(i/3)*3 + Math.floor(j/3)].push(board[i][j])
        }
    }
    for(let section of sections){
        if(section.length != new Set(section).size){
            return false
        }
    }
    return true
};

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))