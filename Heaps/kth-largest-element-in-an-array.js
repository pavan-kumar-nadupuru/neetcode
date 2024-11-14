class Heap {
    constructor(comparator = ((a, b) => a - b)) {
        this.heap = [];
        this.comparator = comparator;
    }
    heapify() {
        for (let i = this.getParentInd(this.heap.length - 1); i >= 0; i--) {
            this.bubbleDown(i);
        }
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
    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
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
}

// var findKthLargest = function (nums, k) {
//     let heap = new Heap(((a, b) => a - b));
//     for (num of nums) {
//         heap.insert(num);
//         if (heap.size() > k) {
//             heap.getTop();
//         }
//         // console.log(heap.heap)
//     }
//     return heap.peek() || 0;
// }

var findKthLargest = function (nums, k) {
    const heap = new Heap();
    heap.heap = nums;
    console.log(heap.heap);
    heap.heapify();
    console.log(heap.heap);
}

console.log(findKthLargest([7, 6, 5, 4, 3, 2, 1], 5))