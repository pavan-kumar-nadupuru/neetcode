var reverseKGroup = function (head, k) {
    let cur = head;
    let prev = null;
    let c = 0;
    let stop = head;
    while (c < k && stop) {
        stop = stop.next;
        c++;
    }
    if (c < k) {
        return head;
    }
    while (cur != stop) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    head.next = reverseKGroup(stop, k);
    return prev;
}