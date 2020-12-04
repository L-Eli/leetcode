/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    let result = [S];
    for (let i = 0; i < S.length; i++) {
        let code = S.charCodeAt(i);
        if ((code > 64 && code < 91) || (code > 96 && code < 123)) {
            let newResult = [];
            let lowerCaseCode = code > 91 ? code - 32 : code;
            let upperCaseCode = code < 96 ? code + 32 : code;
            for (let j = 0; j < result.length; j++) {
                let leftStr = result[j].substr(0, i);
                let rightStr = result[j].substr(i + 1);
                newResult.push(leftStr + String.fromCharCode(upperCaseCode) + rightStr);
                newResult.push(leftStr + String.fromCharCode(lowerCaseCode) + rightStr);
            }
            result = newResult;
        }
    }
    return result;
};