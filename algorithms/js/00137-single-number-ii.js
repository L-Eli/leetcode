/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (!nums.includes(nums[i], nums.indexOf(nums[i]) + 1)) {
            return nums[i];
        }
    }
};