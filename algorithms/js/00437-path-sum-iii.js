/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum, nextSum = null, use = false) {
    if (!root) {
        return 0;
    }

    nextSum = (nextSum === null ? sum : nextSum) - root.val;

    return (nextSum === 0 ? 1 : 0) + pathSum(root.left, sum, nextSum, true) + pathSum(root.right, sum, nextSum, true) + (use ? 0 : pathSum(root.left, sum) + pathSum(root.right, sum));
};