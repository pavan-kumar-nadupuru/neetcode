/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while (start < end) {
        const temp = numbers[start] + numbers[end];
        if (temp === target) {
            return [start + 1, end + 1];
        }
        if (temp > target) {
            end--;
        }
        if (temp < target) {
            start++;
        }
    }
};