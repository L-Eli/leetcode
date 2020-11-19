/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let row = [];
    for (let i = 0; i < rowIndex + 1; i++) {
        let tempRow = [1];
        for (let j = 1; j < i; j++) {
            tempRow.push(row[j - 1] + row[j]);
        }
        if (i) {
            tempRow.push(1);
        }
        row = tempRow;
    }
    return row;
};