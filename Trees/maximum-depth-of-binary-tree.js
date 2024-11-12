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
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}


var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    let q = [];
    q.push([root, 1]);
    let ans = 1;
    while (q.length) {
        let [node, level] = q.shift();
        ans = Math.max(ans, level);
        if (node.left) {
            q.push([node.left, level + 1]);
        }
        if (node.right) {
            q.push([node.right, level + 1]);
        }
    }
    return ans;
}

var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    let s = [];
    s.push([root, 1]);
    let ans = 1;
    while (s.length) {
        let [node, level] = s.pop();
        ans = Math.max(ans, level);
        if (node.right) {
            s.push([node.right, level + 1]);
        }
        if (node.left) {
            s.push([node.left, level + 1]);
        }
    }
    return ans;
}