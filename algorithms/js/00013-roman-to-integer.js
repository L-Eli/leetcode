/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const syms = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  const sLen = s.length;
  for (let i = 0; i < sLen; i++) {
    const sym1 = s[i];
    const sym2 = s[i + 1];
    const buf1 = syms[sym1];
    const buf2 = syms[sym2];
    if (buf1 < buf2) {
      sum += buf2 - buf1;
      i++;
      continue;
    }
    sum += buf1;
  }

  return sum;
};
