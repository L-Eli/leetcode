/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length) {
        return [];
    }
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;
    let result = [];

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        for (let i = top + 1; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        if (left < right && top < bottom) {
            for (let i = right - 1; i > left; i--) {
                result.push(matrix[bottom][i]);
            }
            for (let i = bottom; i > top; i--) {
                result.push(matrix[i][left]);
            }
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    return result;
};