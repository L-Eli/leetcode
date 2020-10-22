/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    const MAX_INT = (2n << 30n) - 1n;
    let sign = dividend >= 0 ^ divisor > 0 ? -1n : 1n;
    divisor = BigInt(Math.abs(divisor));
    dividend = BigInt(Math.abs(dividend));

    let quotient = 0n;
    for (let i = 31n; i > -1n; i -= 1n) {
        if ((dividend >> i) >= divisor) {
            dividend -= (divisor << i);
            quotient += 1n << i;
        }
    }

    if (sign * quotient > MAX_INT) {
        return MAX_INT;
    }

    return parseInt(sign * quotient);
};