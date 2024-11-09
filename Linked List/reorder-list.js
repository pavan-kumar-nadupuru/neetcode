/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = slow.next;

    slow.next = null;

    let cur = second;
    let prev = null;
    while (cur) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    let first = head;
    let last = prev;
    while (first && last) {
        let temp1 = first.next;
        let temp2 = last.next;
        first.next = last;
        last.next = temp1;
        first = temp1;
        last = temp2;
    }
    return head;
};