/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let no = x;
    let result = 0;
    while (0 < no) {
        result = result * 10 + no % 10;
        no = Math.floor(no / 10);
    }
    
    return result === x;
};
