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
 * @return {boolean}
 */
function height(root) {
    if (!root) {
        return 0;
    }
    return 1 + Math.max(height(root.left), height(root.right));
}
var isBalanced = function (root) {
    if (!root) {
        return true;
    }
    let lh = height(root.left);
    let rh = height(root.right);
    if (Math.abs(lh - rh) > 1) {
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
};


var isBalanced = function (root) {
    if (!root) {
        return true;
    }

    function dfs(root) {
        if (!root) {
            return [true, 0];
        }
        let lh = dfs(root.left);
        let rh = dfs(root.right);
        return [lh[0] && rh[0] && Math.abs(lh[1] - rh[1]) < 2, 1 + Math.max(lh, rh)]
    }
    return dfs(root);
}



var isBalanced = function (root) {

    function checkHeight(node) {
        if (!node) {
            return 0;
        }
        let lh = checkHeight(node.left)
        if (lh === -1) return -1;
        let rh = checkHeight(node.right)
        if (rh === -1) return -1;
        if (Math.abs(lh - rh) > 1) return -1;
        return 1 + Math.max(lh, rh);
    }
    return checkHeight(root) !== -1;

}