/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    let result = new Array(num1.length + num2.length);
    for (let i = num1.length - 1; i >= 0; i--) {
        let tempNum = num1[i] - '0';
        for (let j = num2.length - 1; j >= 0; j--) {
            let sum = tempNum * (num2[j] - '0') + (result[i + j + 1] || 0);
            result[i + j + 1] = sum % 10;
            result[i + j] = ~~(sum / 10) + (result[i + j] || 0);
        }
    }
    while (!result[0]) {
        result.shift();
    }
    return result.join('');
};