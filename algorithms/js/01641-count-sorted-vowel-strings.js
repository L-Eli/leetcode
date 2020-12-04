/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
    let combinations = [1, 1, 1, 1, 1];
    const sumSub = i => {
        let sum = 0;
        for (;i < combinations.length; i++) {
            sum += combinations[i];
        }
        return sum;
    }
    for (let i = 1; i < n; i++) {
        for(let j = 0; j < combinations.length; j++) {
            combinations[j] = sumSub(j);
        }
    }

    return sumSub(0);
}