/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    while (nums[i] >= nums[i + 1]) {
        i--;
    }

    let swap = (a, b) => {
        temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }

    let j;
    if (i > - 1) {
        j = nums.length - 1;
        while (j > i && nums[j] <= nums[i]) {
            j--;
        }

        swap(i, j);
    }

    for (let k = i + 1; k < i + Math.floor((nums.length - i - 1) / 2) + 1; k++) {
        swap(k, nums.length - k + i);
    }
};