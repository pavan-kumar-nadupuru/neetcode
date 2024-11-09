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
    let m = new Map();
    let temp = head;
    if (!head) {
        return null;
    }
    while (temp) {
        m.set(temp, new _Node(temp.val, null, null));
        temp = temp.next;
    }
    temp = head;

    while (temp) {
        m.get(temp).next = m.get(temp.next) || null;
        m.get(temp).random = m.get(temp.random) || null;
        temp = temp.next;
    }
    return m.get(head);
};


function ListNode(val, next) {
    this.val = val;
    this.next = next;
}
function cloneLL(head) {
    if (!head) {
        return null;
    }
    return new ListNode(head.val, cloneLL(head.next))
}