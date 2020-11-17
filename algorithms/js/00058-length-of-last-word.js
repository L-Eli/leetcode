/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let result = 0;
    let space = false;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === ' ') {
            space = true;
        } else {
            if (space) {
                space = false;
                result = 1;
            } else {
                result++;
            }
        }
    }
    return result;
};