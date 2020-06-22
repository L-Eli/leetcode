/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    bestSum = nums[0] + nums[1] + nums[2];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(bestSum - target)) {
                bestSum = sum;
            }
            if (sum < target) {
                do {
                    left++;
                } while (left < right && nums[left] == nums[left - 1]);
                continue;
            }
            do {
                right--;
            } while (left < right && nums[right] == nums[right + 1]);
        }
    }

    return bestSum;
};