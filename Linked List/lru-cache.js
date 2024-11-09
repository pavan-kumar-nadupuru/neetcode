/**
 * @param {number} capacity
 */

function ListNode(key, val, prev, next) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
}

var LRUCache = function (capacity) {
    this.capacity = capacity;
    // Least recently used
    this.left = new ListNode(0, 0, null, null);
    // Most recently used
    this.right = new ListNode(0, 0, null, null);

    this.left.next = this.right;
    this.right.prev = this.left;

    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        let cur = this.cache.get(key);
        this.delete(cur);
        this.insert(cur);
        return cur.val;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.get(key)) {
        this.delete(this.cache.get(key));
    }
    let temp = new ListNode(key, value, null, null);
    this.cache.set(key, temp);
    this.insert(temp);
    if (this.cache.size > this.capacity) {
        const lru = this.left.next;
        this.cache.delete(lru.key);
        this.delete(lru);
    }
};

LRUCache.prototype.insert = function (node) {
    let prev = this.right.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this.right
    this.right.prev = node;
}

LRUCache.prototype.delete = function (node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */