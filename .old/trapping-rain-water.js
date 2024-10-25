/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//     let toatalWater = 0
//     let curL = 0
//     let curLevel = calculateLevels(height, curL)
//     while (curLevel.indexOf('1')>-1) {
//         let s = curLevel.replaceAll('0', ' ')
//         s=s.trim()
//         toatalWater += (s.match(/ /g) || []).length
//         curL += 1
//         curLevel = calculateLevels(height, curL)
//     }
//     return toatalWater;
// }

// var calculateLevels = function (height, level) {
//     let cur = ''
//     for (let i = 0; i < height.length; i++) {
//         if (height[i] - level > 0) {
//             cur+='1'
//         } else {
//             cur+=' '
//         }
//     }
//     return cur
// }


var trap = function(height){
    // let leftMax = []
    // let rightMax = []
    // let curMax = -Infinity;
    // for(let i=0; i<height.length; i++){
    //     curMax = Math.max(curMax, height[i])
    //     leftMax.push(curMax)
    // }
    // let revHei = height.toReversed();
    // curMax = -Infinity;
    // for(let i=0; i<revHei.length; i++){
    //     curMax = Math.max(curMax, revHei[i])
    //     rightMax.push(curMax)
    // }
    // rightMax.reverse()
    // let water = 0
    // for(let i=0;i<height.length;i++){
    //     water += Math.min(leftMax[i],rightMax[i])-height[i];
    // }
    // console.log(leftMax, rightMax)
    // return water




    let leftMax = -Infinity
    let rightMax = -Infinity
    let water = 0
    let left = 0, right = height.length - 1;
    while(left < right){
        if(height[left] < height[right]){
            leftMax = Math.max(leftMax, height[left])
            water = water + leftMax - height[left]
            left ++;
        } else {
            rightMax = Math.max(rightMax, height[right])
            water = water + (rightMax - height[right])
            right--;
        }
    }
    return water

}

console.log(trap([4,2,0,3,2,5]))