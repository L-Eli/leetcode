/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let left = 0;
    let right = x;
    let result = 0;
    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        if (Math.pow(middle, 2) <= x) {
            result = middle;
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return result;
};

console.log(mySqrt(4));
console.log(mySqrt(8));