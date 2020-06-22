/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n == 0) {
        return 1;
    }

    if (n == 1) {
        return x;
    }

    let result = myPow(x, parseInt(n / 2))
    if (n % 2 == 0) {
        return result * result;
    }

    if (n > 0) {
        return x * result * result;
    }

    return result * result / x;
};