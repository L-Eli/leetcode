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
 * @return {number[][]}
 */
var pathSum = function (root, sum, nodes = [], result = []) {
    if (root) {
        let currentNodes = [...nodes, root.val];
        if (sum === root.val && !root.left && !root.right) {
            result.push(currentNodes);
        } else {
            if (root.left) {
                result = pathSum(root.left, sum - root.val, currentNodes, result);
            }
            if (root.right) {
                result = pathSum(root.right, sum - root.val, currentNodes, result);
            }
        }
    }

    return result;
};