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
    enqueue(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }
    bubbleUp(ind) {
        while (this.hasParent(ind) && this.comparator(this.heap[ind], this.heap[this.getParentInd(ind)]) < 0) {
            this.swap(ind, this.getParentInd(ind));
            ind = this.getParentInd(ind);
        }
    }
    dequeue() {
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



var Twitter = function () {
    this.users = new Map();
    this.time = 0;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    this.time += 1;
    if (!this.users.has(userId)) {
        this.users.set(userId, {
            following: new Set(),
            tweets: []
        })
    }
    this.users.get(userId).tweets.push({
        time: this.time,
        id: tweetId
    })
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    if (!this.users.has(userId)) return [];
    let allTweets = this.users.get(userId).tweets;
    this.users.get(userId).following.forEach((person) => {
        if (this.users.has(person)) {
            let personTweets = this.users.get(person).tweets;
            allTweets = allTweets.concat(personTweets);
        }
    });
    let heap = new Heap(((a, b) => b.time - a.time));
    allTweets.map((tweet) => {
        heap.enqueue(tweet);
    });
    let feed = [];
    while (heap.size() && feed.length < 10) {
        feed.push(heap.dequeue().id)
    }
    return feed;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.users.has(followerId)) {
        this.users.set(followerId, {
            following: new Set(),
            tweets: []
        })
    }
    this.users.get(followerId).following.add(followeeId)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (this.users.has(followerId)) {
        this.users.get(followerId).following.delete(followeeId);
    }
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */