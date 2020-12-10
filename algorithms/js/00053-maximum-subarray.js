/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let result = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum + nums[i] > -1) {
            sum += nums[i];
            result = Math.max(sum, result);
        } else {
            sum = 0;
            result = Math.max(nums[i], result);
        }
    }
    return result;
};