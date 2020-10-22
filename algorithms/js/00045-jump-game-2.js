/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let result = 0;
    let next = 0;
    let previous = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > previous) {
            result++;
            previous = next;
        }
        next = Math.max(next, i + nums[i]);
    }

    return result;
};