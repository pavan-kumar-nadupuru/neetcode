var reverseList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let temp = head;
    let temp1 = head.next;
    let ans = null;
    while (temp && temp1) {
        ans = new ListNode(temp.val, ans);
        temp = temp1;
        temp1 = temp1.next;
    }
    ans = new ListNode(temp.val, ans);
    return ans;
}

var reverseList = function (head) {
    let cur = head;
    let prev = null;
    while (cur) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}