/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let length = strs.length;
    if (!length) {
        return '';
    }
    let result = strs[0];
    for (let i = 0; i < length; i++) {
        while (0 !== strs[i].search(result)) {
            result = result.substr(0, result.length - 1);
        }
    }
    
    return result;
};
