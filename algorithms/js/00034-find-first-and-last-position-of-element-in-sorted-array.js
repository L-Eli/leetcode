/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    if (left === right && nums[left] === target) {
        return [0, 0];
    }

    let middle = 0;
    let first = -1;
    while (left < right) {
        middle = parseInt((left + right) / 2);
        if (nums[middle] >= target) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    if (nums[left] !== target) {
        return [-1, -1];
    }
    first = left;

    right = nums.length - 1;
    while (left < right) {
        middle = parseInt((left + right + 1) / 2);
        if (nums[middle] <= target) {
            left = middle;
        } else {
            right = middle - 1;
        }
    }
    if (nums[right] !== target) {
        return [-1, -1];
    }
    return [first, right];
};