/*
 * @lc app=leetcode id=846 lang=javascript
 *
 * [846] Hand of Straights
 */

// @lc code=start
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    if (hand.length !== groupSize ** 2) return false;
    const counts = new Map();
    for (let h of hand) {
        if (!counts.has(h)) {
            counts.set(h, 0);
        }
        counts.set(h, counts.get(h) + 1);
    }
    let heap = new MinPriorityQueue();
    for (let [k, _] of counts) {
        heap.enqueue(k);
    }
    while (heap.size() > 0) {
        let small = heap.front().element;
        for (let i = small; i < small + groupSize; i++) {
            if (!counts.has(i)) {
                return false;
            }
            counts.set(counts.get(i) - 1);
            if (counts.get(i) == 0) {
                if (heap.dequeue().element != i) {
                    return false;
                }
            }
        }
    }
    return true;
};
// @lc code=end

