/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const counts = new Map();
    for (let n of nums) {
        if (counts.has(n)) {
            counts.set(n, counts.get(n) + 1);
        } else {
            counts.set(n, 1)
        }
    }
    nums.sort((a, b) => {
        return counts.get(b) - counts.get(a)
    })
    return Array.from(new Set(nums)).slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 3], 2))