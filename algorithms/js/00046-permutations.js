/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [[nums[0]]];
    for (let i = 1; i < nums.length; i++) {
        let permutations = [];
        for (let j = 0; j <= i; j++) {
            for (let k = 0; k < result.length; k++) {
                permutations.push([...result[k].slice(0, j), nums[i], ...result[k].slice(j)]);
            }
        }
        result = permutations;
    }
    return result;
};