/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = {};
    for (let i = 1; i <= target; i++) {
        result[i] = [];
        for (let j = 0; j < candidates.length; j++) {
            let candidate = candidates[j];
            let expect = i - candidate;
            if (expect > 0 && result[expect].length) {
                for (let k = 0; k < result[expect].length; k++) {
                    let combination = result[expect][k];
                    if (combination[combination.length - 1] <= candidate) {
                        result[i].push([...combination, candidate]);
                    }
                }
            }

            if (i === candidate) {
                result[i].push([i]);
            }
        }
    }
    return result[target];
};