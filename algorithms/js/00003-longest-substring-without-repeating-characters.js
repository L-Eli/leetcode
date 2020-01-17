/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let length = s.length;
    let longestStr = '';
    let result = 0;
    for (let i = 0; i < length; i++) {
        let index = longestStr.indexOf(s[i]);
        if (-1 < index) {
            result = longestStr.length > result ? longestStr.length : result;
            longestStr = longestStr.substr(index + 1);
        }
        longestStr += s[i];
    }
    return longestStr.length > result ? longestStr.length : result;
};
