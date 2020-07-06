/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n == 0) {
        return [''];
    }

    let result = [];

    for (let i = 0; i < n; i++) {
        let leftResult = generateParenthesis(i);
        for (let left of leftResult) {
            let rightResult = generateParenthesis(n - 1 - i);
            for (let right of rightResult) {
                result.push(`${left}(${right})`);
            }
        }
    }

    return result;
};