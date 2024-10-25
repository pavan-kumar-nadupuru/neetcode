/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	let nSet = Array.from(new Set(nums));
	return nSet.length === nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1]));

