/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let plus = 1;
    for (let j = digits.length - 1; plus && j >= 0; j--) {
        let digit = digits[j] + 1;
        digits[j] = digit % 10;
        plus = digit > 9;
    }
    if (plus) {
        digits.unshift(1);
    }

    return digits;
};