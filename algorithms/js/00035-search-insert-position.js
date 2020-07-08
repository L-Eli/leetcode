/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums[nums.length - 1] < target) {
        return nums.length;
    }

    let i = 0;
    let j = nums.length;
    while (i < j) {
        let mid = i + Math.floor((j - i) / 2);
        if (nums[mid] < target) {
            i = mid + 1;
        } else {
            j = mid;
        }
    }
    return j;
};