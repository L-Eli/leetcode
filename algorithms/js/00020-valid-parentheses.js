/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let bracketMap = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    let bracketStart = [
        '(',
        '[',
        '{',
    ];
    let len = s.length;
    let symbols = [];
    for (let i = 0; i < len; i++) {
        let ch = s[i];
        if (-1 < bracketStart.indexOf(ch)) {
            symbols.push(ch);
            continue;
        }
        let symbolsLen = symbols.length;
        if (symbolsLen && ch == bracketMap[symbols[symbolsLen - 1]]) {
            symbols.pop();
            continue;
        }

        return false;
    }

    return symbols.length == [];
};
