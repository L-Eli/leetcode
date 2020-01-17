/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (1 === numRows) {
        return s;
    }

    let length = s.length;
    let curRow = 0;
    let table = new Array(numRows).fill('');
    let moveDown = false;

    for (let i = 0; i < length; i++) {
        table[curRow] += s[i];
        if (0 === curRow || curRow === numRows - 1) {
            moveDown = !moveDown;
        }
        curRow += moveDown ? 1 : -1;
    }

    let result = '';
    for (let i = 0; i < numRows; i++) {
        result += table[i];
    }

    return result;
};
