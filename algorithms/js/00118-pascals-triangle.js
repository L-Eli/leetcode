/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let result = [];
    for (let i = 0; i < numRows; i++) {
        let row = [1];
        for (let j = 1; j < i; j++) {
            row.push(result[i - 1][j - 1] + result[i - 1][j]);
        }
        if (i) {
            row.push(1);
        }
        result.push(row);
    }
    return result;
};