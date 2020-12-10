/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    let fibs = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibs.push(fibs[i - 1] + fibs[i - 2] + fibs[i - 3]);
    }
    return fibs[n];
};
