/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (list1, list2) {
    let head1 = list1;
    let head2 = list2;
    let nL = null;
    while (head1 && head2) {
        let toApp = null;
        if (head1.val < head2.val) {
            toApp = head1.val;
            head1 = head1.next;
        } else {
            toApp = head2.val;
            head2 = head2.next;
        }
        // Append to new one
        if (!nL) {
            nL = new ListNode(toApp);
        } else {
            let temp = nL;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = new ListNode(toApp);
        }
    }
    let remain = head1 || head2;
    if (!nL) {
        nL = remain;
    } else {
        let temp = nL;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = remain
    }
    return nL;
};
