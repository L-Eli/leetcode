/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const strLength = s.length;
  const subStringSet = {};
  let result = '';
  for (let i = 0; i < strLength; i++) {
    subStringSet[i] = {};
    subStringSet[i][i] = true;
    if (subStringSet[i][i] && 1 > result.length) {
      result = s[i];
    }
    subStringSet[i][i + 1] = s[i] === s[i + 1];
    if (subStringSet[i][i + 1] && 2 > result.length) {
      result = s.substr(i, 2);
    }
  }
  for (let j = 2; j < strLength; j++) {
    for (let i = 0; i < j - 1; i++) {
      subStringSet[i][j] = subStringSet[i + 1][j - 1] && s[i] === s[j];
      if (subStringSet[i][j] && j - i + 1 > result.length) {
        result = s.substr(i, j - i + 1);
      }
    }
  }
  return result;
};
