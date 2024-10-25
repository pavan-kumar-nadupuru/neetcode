/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1
    while (left < right && left >= 0 && right < numbers.length) {
        let temp = numbers[left] + numbers[right];
        if (temp == target) {
            return [left + 1, right + 1]
        } else if(temp<target){
            left ++
        } else {
            right --
        }
    }
};


// [1,2,3,4,5]  3
