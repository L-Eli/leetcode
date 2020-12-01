/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let s = {};
    for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split('').sort().join('');
        if (!s[key]) {
            s[key] = [];
        }
        s[key].push(strs[i]);
    }
    return Object.values(s);
};