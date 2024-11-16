/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    if (!head) return null;
    const oldToNew = new Map();
    oldToNew.set(null, null);
    let node = head;
    while (node) {
        oldToNew.set(node, new ListNode(node.val));
        node = node.next;
    }
    node = head;
    while (node) {
        oldToNew.get(node).next = oldToNew.get(node.next);
        oldToNew.get(node).random = oldToNew.get(node.random);
        node = node.next;
    }
    return oldToNew.get(head);
};
// @lc code=end

