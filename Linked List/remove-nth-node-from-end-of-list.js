/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // let size = 0;
    // let node = head;
    // while(node){
    //     node = node.next;
    //     size++;
    // }
    // let jumps = size - n - 1;
    // let temp = head;
    // if(jumps < 0){
    //     return head.next;
    // }
    // while(jumps > 0){
    //     temp = temp.next;
    //     jumps--;
    // }
    // if(temp.next){
    //     temp.next = temp.next.next;
    // } else {
    //     return null;
    // }
    // return head;
    let dummy = new ListNode(0, head);
    let l = dummy;
    let r = head;
    while (r && n > 0) {
        r = r.next;
        n--;
    }
    while (r) {
        l = l.next;
        r = r.next;
    }
    left.next = left.next.next;
    return dummy.next;
};