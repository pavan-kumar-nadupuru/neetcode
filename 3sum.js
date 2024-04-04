/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// var threeSum = function(nums) {
//     let all = new Set()
//     var seen = new Set()
//     for(let ind in nums){
//         if(seen.has(-1*nums[ind])){
//             continue;
//         } else {
//             seen.add(-1*nums[ind])
//         }
//         let twoSums = twoSumAll(nums.toSpliced(ind,1), -1*nums[ind]);
//         twoSums.forEach(arr => {
//             // arr = arr.sort().join('fff')
//             all.add(arr)
//         })
//     }
//     return Array.from(all).map(v=>v.split('FFF'))
// };


// var twoSumAll = function(nums, target) {
//     let map = new Map();
//     let posssible = new Set()
//     for(let ind in nums){
//         if(map.has(target - nums[ind])){
//             posssible.add([-1*target, nums[ind], nums[map.get(target - nums[ind])]].sort().join('FFF'))
//         }
//         map.set(nums[ind], ind)
//     }
//     return posssible
// };


var threeSum = function(nums){
    let all = [];
    nums = nums.sort((a,b) => a-b)
    for(let i=0; i< nums.length; i++)
    {
        if(i>0 && nums[i] == nums[i-1]){
            continue;
        }
        let left = i+1;
        let right = nums.length-1;
        while(left < right){
            if(nums[i]+nums[left]+nums[right] > 0){
                right--;
            } else if(nums[i]+nums[left]+nums[right] < 0){
                left++;
            } else{
                all.push([nums[i], nums[left], nums[right]])
                left ++;

                while(nums[left]==nums[left-1] && left < right) left ++
            }
        }
    }
    return all
}


// [-4, -3, -2, -1, -1, 0,  0,  1,  2,  3, 4]

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))
// console.log(threeSum([0,0,0]))