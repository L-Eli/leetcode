/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let existsNum = new Set();
    while (!existsNum.has(n)) {
        existsNum.add(n);
        let nextNum = 0;
        while (n) {
            nextNum += Math.pow(n % 10, 2);
            n = ~~(n / 10);
        }
        if (nextNum === 1) {
            console.log(existsNum);
            return true;
        }
        n = nextNum;
    }
    return false;
};