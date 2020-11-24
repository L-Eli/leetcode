/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let result = '';
    while (n > 0) {
        let ascii = (n - 1) % 26;
        result = String.fromCharCode(ascii + 65) + result;
        n = ~~((n - 1) / 26);
    }
    return result;
};