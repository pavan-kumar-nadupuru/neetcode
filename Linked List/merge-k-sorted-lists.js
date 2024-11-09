/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null;
    }
    while (lists.length > 1) {
        let temp = [];
        for (let i = 0; i < lists.length; i += 2) {
            temp.push(merge(lists[i], i + 1 < lists.length ? lists[i + 1] : null));
        }
        lists = temp;
    }
    return lists[0];
};

var merge = function (l1, l2) {
    let ans = new ListNode(0);
    let tail = ans;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    if (l1) {
        tail.next = l1;
    }
    if (l2) {
        tail.next = l2;
    }
    return ans.next;
}