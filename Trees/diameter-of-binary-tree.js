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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let ans = 0;
    function height(root) {
        if (!root) {
            return 0;
        }
        let lh = height(root.left)
        let rh = height(root.right);
        ans = Math.max(ans, lh + rh);
        return Math.max(lh, rh) + 1;
    }
    console.log(height(root));
    return ans;
};