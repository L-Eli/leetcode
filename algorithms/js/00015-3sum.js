/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                result.push([nums[i], nums[left], nums[right]]);

                do {
                    left++;
                } while (left < right && nums[left] == nums[left - 1]);

                do {
                    right--;
                } while (left < right && nums[right] == nums[right + 1]);

                continue;
            }
            if (sum < 0) {
                left++;
                continue;
            }
            right--;
        }
    }

    return result;
};