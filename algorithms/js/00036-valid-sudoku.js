/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let horizontal = [];
        let vertical = [];
        let box = [];
        let baseY = parseInt(i / 3) * 3;
        let baseX = i % 3 * 3;
        for (let j = 0; j < 9; j++) {
            let horizontalPoint = board[i][j];
            let verticalPoint = board[j][i];
            let boxPoint = board[baseY + parseInt(j / 3)][baseX + j % 3];
            if (
                horizontal.includes(horizontalPoint) ||
                vertical.includes(verticalPoint) ||
                box.includes(boxPoint)
            ) {
                return false;
            }
            if (horizontalPoint !== '.') horizontal.push(horizontalPoint);
            if (verticalPoint !== '.') vertical.push(verticalPoint);
            if (boxPoint !== '.') box.push(boxPoint);
        }
    }
    return true;
};