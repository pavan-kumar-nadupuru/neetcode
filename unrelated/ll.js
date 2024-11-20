function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}




const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
// 1 -> 2 -> 3 -> 4

let prev = null;
let cur = head;
while (cur) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
}

// prev
let node = prev;
while (node) {
    console.log(node.val);
    node = node.next;
}