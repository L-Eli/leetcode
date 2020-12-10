/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    let fibs = [0, 1, 1];
    for (let i = 3; i <= N; i++) {
        fibs.push(fibs[i - 1] + fibs[i - 2]);
    }
    return fibs[N];
};
