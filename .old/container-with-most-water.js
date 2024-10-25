/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
    // let maxA = 0
    // for (let i = 0; i < height.length; i++) {
    //     let temp = height.toSpliced(i)
    //     if (!temp.some((val => val > height[i]))) {
    //         let comp = -Infinity;
    //         for (let j = height.length-1; j > i; j--) {
    //             let temp2 = height.toSpliced(0, j + 1)
    //             if(!temp2.some(val => val > height[j])){
    //                 comp = Math.max(comp, (Math.min(height[i], height[j]) * (j - i)))
    //                 count += 1
    //             }
    //         }
    //         maxA = Math.max(maxA, comp)
    //     }
    // }
    // return maxA
// }
var maxArea = function (height) {
    let maxA = -Infinity;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        maxA = Math.max(maxA, (Math.min(height[left], height[right]) * (right - left)))
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxA;
};

console.log(maxArea([2, 3, 4, 5, 18, 17, 6]))