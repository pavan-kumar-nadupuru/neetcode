/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class Heap {
    constructor(comparator) {
        this.heap = [];
        this.comparator = comparator || ((a, b) => a - b);
    }
    // helpers
    hasParent(index) {
        return Math.floor((index - 1) / 2) >= 0;
    }
    hasLeftChild(index) {
        return ((2 * index) + 1) < this.heap.length;
    }
    hasRightChild(index) {
        return ((2 * index) + 2) < this.heap.length;
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeftChildIndex(index) {
        return (2 * index) + 1;
    }
    getRightChildIndex(index) {
        return (2 * index) + 2;
    }
    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // core
    bubbleUp(index) {
        while (this.hasParent(index) && this.comparator(this.heap[index], this.heap[this.getParentIndex(index)]) < 0) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }
    insert(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }
    bubbleDown(index) {
        while (this.hasLeftChild(index)) {
            let smallest = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.comparator(this.heap[this.getRightChildIndex(index)], this.heap[smallest]) < 0) {
                smallest = this.getRightChildIndex(index);
            }
            if (this.comparator(this.heap[index], this.heap[smallest]) <= 0) break;
            this.swap(index, smallest);
            index = smallest;
        }
    }
    getTop() {
        if (this.heap.length == 0) return null;
        if (this.heap.length == 1) return this.heap.pop();

        let top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return top;
    }
    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
}
var maxSlidingWindow = function (nums, k) {
    const heap = new Heap((a, b) => b[0] - a[0]);
    for (let i = 0; i < k - 1; i++) {
        heap.insert([nums[i], i]);
    }
    let l = 0;
    let ans = [];
    for (let r = 0; r < nums.length; r++) {
        while (r >= k && heap.size() > 0 && heap.peek()[1] < l) {
            heap.getTop();
        }
        heap.insert([nums[r], r]);
        l++;
        if (r >= k) {
            ans.push(heap.peek()[0]);
        }
    }
    return ans;
};
// @lc code=end

