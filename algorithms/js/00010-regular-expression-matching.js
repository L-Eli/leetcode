/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const memo = [];

  const dynamicProgramming = (i, j) => {
    const key = `${i}${j}`;
    if (undefined !== memo[key]) {
      return memo[key];
    }

    if (j === p.length) { // checking consuming all the characters of string in the end of the p.
      memo[key] = i === s.length;
      return memo[key];
    }

    const firstMatch = i < s.length && (p[j] === s[i] || p[j] === '.');

    if (j + 1 < p.length && p[j + 1] === '*') {
      memo[key] = dynamicProgramming(i, j + 2) || firstMatch && dynamicProgramming(i + 1, j);
      return memo[key];
    }

    memo[key] = firstMatch && dynamicProgramming(i + 1, j + 1);
    return memo[key];
  };

  return dynamicProgramming(0, 0, s, p);
};
