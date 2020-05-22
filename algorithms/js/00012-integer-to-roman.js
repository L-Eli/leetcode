/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const map = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  };

  let numDigits = parseInt(Math.log10(num) + 1);
  let result = '';
  for (let i = 0; i < numDigits; i++) {
    let place = parseInt(Math.pow(10, (numDigits - i - 1)));
    let firstNum = parseInt(num / place);
    if (firstNum == 4) {
      result += map[place];
      result += map[place * 5];
    } else if (firstNum == 9) {
      result += map[place];
      result += map[place * 10];
    } else {
      if (firstNum > 4) {
        result += map[place * 5];
      }

      for (let j = 0; j < firstNum % 5; j++) {
        result += map[place];
      }
    }
    num -= firstNum * place;
  }

  return result;
};
