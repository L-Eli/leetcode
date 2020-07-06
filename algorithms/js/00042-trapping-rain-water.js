/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;

    let result = 0;

    let leftHeight = height[left];
    let rightHeight = height[right];
    while (left < right) {
        if (leftHeight < rightHeight) {
            if (height[left + 1] > leftHeight) {
                leftHeight = height[left + 1];
            } else {
                result += leftHeight - height[left + 1];
            }
            left++;
        } else {
            if (height[right - 1] > rightHeight) {
                rightHeight = height[right - 1];
            } else {
                result += rightHeight - height[right - 1];
            }
            right--;
        }
    }

    return result;
};