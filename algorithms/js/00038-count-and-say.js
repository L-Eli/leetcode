/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n == 1) {
        return '1';
    }

    let countSay = countAndSay(n - 1);
    let count = 0;
    let number = '';
    let result = '';
    for (let i = 0; i < countSay.length; i++) {
        if (number == countSay[i]) {
            count++;
            continue;
        }

        if (count) {
            result += count + number;
        }

        count = 1;
        number = countSay[i];
    }
    result += count + number;

    return result;
};