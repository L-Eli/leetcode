/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    let length = words[0].length;
    let dict = {};
    let emptyDict = {};
    for (let i = 0; i < words.length; i++) {
        dict[words[i]] ? dict[words[i]]++ : dict[words[i]] = 1;
        emptyDict[words[i]] = 0;
    }
    let result = [];
    for (let i = 0; i < length; i++) {
        let currentWords = [];
        let currentDict = { ...emptyDict };
        for (let j = i; j < s.length; j += length) {
            let word = s.substr(j, length);
            currentWords.push(word);
            word in currentDict ? currentDict[word]++ : currentDict[word] = 1;
            while (currentDict[word] > (dict[word] || 0)) {
                currentDict[currentWords.shift()]--;
            }
            if (currentWords.length === words.length) {
                result.push(j + length - length * words.length);
            }
        }
    }
    return result;
};