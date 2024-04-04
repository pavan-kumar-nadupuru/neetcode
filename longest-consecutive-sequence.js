/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//     let map = new Map();
//     nums.forEach((val, ind, arr) => {
//         map.set(val, map.has(val) ? map.get(val) : calculatePower(val, arr, map))
//     })
//     console.log(map)
//     return Math.max(0, ...map.values())

// };

// let calculatePower = (num, nums, map) => {
//     if(map.has(num-1)){
//         return map.get(num-1) + 1
//     } else {
//         if(nums.indexOf(num-1) != -1){
//             return 1 + calculatePower(num-1, nums, map)
//         } else {
//             return 1;
//         }
//     }
// }



var longestConsecutive = function(nums) {
    let res = 0;
    nums.sort((a,b) => b-a)
    let temp = 0;
    for(let i=0; i<nums.length; i++){
        if(i==0){
            temp = 1
        } else{
            if(nums[i] + 1 == nums[i-1]){
                temp += 1
            } else if(nums[i] == nums[i-1]){
                temp += 0
            }
            else {
                temp = 1
            }
        }
        if(temp>res){
            res = temp
        }
    }
    return res;
}

console.log(longestConsecutive([1,2,0,1]))