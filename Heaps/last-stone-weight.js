/**
 * @param {number[]} stones
 * @return {number}
 */
class Heap {
    constructor(comparator = ((a, b) => a - b)) {
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
    delete() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        let top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return top;
    }
    bubbleDown(ind) {
        while (this.hasLeftChild(ind)) {
            let smallest = this.getLeftChildInd(ind);
            if (this.hasRightChild(ind) && this.comparator(this.heap[this.getRightChildInd(ind)], this.heap[smallest]) < 0) {
                smallest = this.getRightChildInd(ind);
            }
            if (this.comparator(this.heap[ind], this.heap[smallest]) <= 0) break;
            this.swap(ind, smallest);
            ind = smallest;
        }
    }
    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}
var lastStoneWeight = function (stones) {
    const heap = new Heap(((a, b) => b - a));
    for (let stone of stones) {
        heap.insert(stone);
    }
    console.log(heap.heap)
    while (heap.size() > 1) {
        let x = heap.delete();
        let y = heap.delete();
        if (x == y) continue;
        heap.insert(x - y);
    }
    return heap.peek() || 0;
};

console.log(lastStoneWeight([1, 3]))