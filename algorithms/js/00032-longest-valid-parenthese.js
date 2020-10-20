/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let result = 0;
    let stack = [];
    let bracket = {
        left: '(',
        right: ')',
    };
    stack.push(-1);
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === bracket.left) {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                result = Math.max(result, i - stack[stack.length - 1]);
            }
        }
    }

    return result;
};