/*
 * @lc app=leetcode id=1851 lang=javascript
 *
 * [1851] Minimum Interval to Include Each Query
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */

class Heap {
    constructor(comparator) {
        this.heap = [];
        this.comparator = comparator;
    }
    hasParent(ind) {
        return Math.floor((ind - 1) / 2) >= 0;
    }
    hasLeftChild(ind) {
        return ((2 * ind) + 1) < this.heap.length;
    }
    hasRightChild(ind) {
        return ((2 * ind) + 2) < this.heap.length;
    }
    getParentInd(ind) {
        return Math.floor((ind - 1) / 2);
    }
    getLeftChildInd(ind) {
        return ((2 * ind) + 1);
    }
    getRightChildInd(ind) {
        return ((2 * ind) + 2);
    }
    swap(ind1, ind2) {
        let temp = this.heap[ind1];
        this.heap[ind1] = this.heap[ind2];
        this.heap[ind2] = temp;
    }
    insert(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }
    bubbleUp(ind) {
        while (this.hasParent(ind) && this.comparator(this.heap[ind], this.heap[this.getParentInd(ind)]) < 0) {
            this.swap(ind, this.getParentInd(ind));
            ind = this.getParentInd(ind);
        }
    }
    getTop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        let top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return top;
    }
    bubbleDown(ind) {
        while (this.hasLeftChild(ind)) {
            let small = this.getLeftChildInd(ind);
            if (this.hasRightChild(ind) && this.comparator(this.heap[this.getRightChildInd(ind)], this.heap[small]) < 0) {
                small = this.getRightChildInd(ind);
            }
            if (this.comparator(this.heap[ind], this.heap[small]) <= 0) break;
            this.swap(ind, small);
            ind = small;
        }
    }
    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
    isEmpty() {
        return this.heap.length === 0;
    }
}



var minInterval = function (intervals, queries) {
    intervals.sort((a, b) => a[0] - b[0]);
    const actQ = [...queries];
    const heap = new Heap((a, b) => {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    queries.sort((a, b) => a - b);
    const ans = new Map();
    let i = 0;
    for (let q of queries) {
        while (i < intervals.length && intervals[i][0] <= q) {
            let [l, r] = intervals[i];
            heap.insert([r - l + 1, r]);
            i++;

        }

        while (heap.size() > 0 && heap.peek()[1] < q) {
            heap.getTop();
        }

        if (heap.size() > 0) {
            ans.set(q, heap.peek()[0]);
        }
    }
    return actQ.map(q => ans.has(q) ? ans.get(q) : -1);
};
// @lc code=end

console.log(minInterval([[4, 5], [5, 8], [1, 9], [8, 10], [1, 6]], [7, 9, 3, 9, 3]));

// [1, 9]
// [1, 6]
// [4, 5]
// [5, 8]
// [8, 10]

// [3, 3, 7, 9, 9]