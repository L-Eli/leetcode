/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let size = matrix.length;
    let boundI = Math.ceil(matrix.length / 2)
    let boundJ = parseInt(matrix.length / 2)
    for (let i = 0; i < boundI; i++) {
        for (let j = 0; j < boundJ; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[size- 1 - j][i];
            matrix[size- 1 - j][i] = matrix[size- 1 - i][size- 1 - j];
            matrix[size- 1 - i][size- 1 - j] = matrix[j][size- 1 - i];
            matrix[j][size- 1 - i] = temp;
        }
    }
};