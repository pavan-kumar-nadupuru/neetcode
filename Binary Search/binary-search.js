/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid;
    while (start <= end) {
        mid = ~~((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            start = mid + 1
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
};


console.log(search([1], 1))