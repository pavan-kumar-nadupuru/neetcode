/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (!node) return null;

    let oldToNew = new Map();
    function dfs(node, oldToNew) {
        if (!node) return null;
        if (oldToNew.has(node)) return oldToNew.get(node);
        const copy = new Node(node.val);
        oldToNew.set(node, copy);
        for (let neighbor of node.neighbors) {
            copy.neighbors.push(dfs(neighbor, oldToNew));
        }
        return copy;
    }

    return dfs(node, oldToNew);
};
// @lc code=end

