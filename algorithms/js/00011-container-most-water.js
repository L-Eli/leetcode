/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0;
  let j = height.length - 1;
  let maxArea = 0;

  while (i !== j) {
    maxArea = Math.max(maxArea, (j - i) * Math.min(height[i], height[j]));
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }

  return maxArea;
};
