/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let digitsMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }

    let result = digitsMap[digits.charAt(0)] || [];

    for (let i = 1; i < digits.length; i++) {
        let alphabets = digitsMap[digits[i]];
        let newResult = [];
        for (let j = 0; j < alphabets.length; j++) {
            let tempResult = [...result];
            for (let k = 0; k < tempResult.length; k++) {
                tempResult[k] += alphabets[j];
            }
            newResult = [...newResult, ...tempResult];
        }
        result = newResult;
    }

    return result;
};