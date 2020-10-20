/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle = 0;
    while (left <= right) {
        middle = parseInt((left + right) / 2);
        if (nums[middle] === target) {
            return middle;
        }
        if (nums[left] <= nums[middle]) {
            if (nums[left] <= target && target <= nums[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        } else {
            if (nums[middle] <= target && target <= nums[right]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    }
    return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));