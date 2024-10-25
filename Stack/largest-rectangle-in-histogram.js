/**
 * @param {number[]} heights
 * @return {number}
 */
// var largestRectangleArea = function (heights) {
//     let maxSoFar = heights[0];
//     // At each level go right till you can no more
//     for (let i = 0; i < heights.length; i++) {
//         let j;
//         for (j = i + 1; j < heights.length; j++) {
//             if (heights[j] < heights[i]) {
//                 break;
//             }
//         }
//         let k;
//         for (k = i; k >= 1; k--) {
//             if (heights[k - 1] < heights[i]) {
//                 break;
//             }
//         }
//         console.log(j, k, heights[i], (j - k) * heights[i])
//         maxSoFar = Math.max(maxSoFar, (j - k) * heights[i]);
//     }
//     return maxSoFar;
// };



// var largestRectangleArea = function (heights) {
//     let maxV = null;
//     let sor = heights.map((val, ind) => {
//         return {
//             val: val,
//             ind: ind
//         }
//     });
//     sor = sor.sort((a, b) => b.val - a.val);
//     let lt = heights.length;
//     let su = {};
//     for (let i = sor.length - 1; i >= 0; i--) {
//         let ele = sor[i];
//         if (ele.val in su) {
//             lt--;
//             continue;
//         } else {
//             lt--;
//             su[ele.val] = lt;
//         }
//     }
//     console.log(su)
//     for (let ele of sor) {
//         const maxP = ele.val * (su[ele.val] + 1)
//         if (!maxV || maxV < maxP) {
//             let gol = ele.ind;
//             let gor = ele.ind;
//             let curHei = ele.val;
//             while (gol > 0) {
//                 if (heights[gol - 1] >= curHei)
//                     gol--;
//                 else
//                     break
//             }
//             while (gor < heights.length - 1) {
//                 if (heights[gor + 1] >= curHei)
//                     gor++;
//                 else
//                     break
//             }
//             let maxA = (gor - gol + 1) * curHei;
//             if (!maxV)
//                 maxV = maxA
//             if (maxV < maxA)
//                 maxV = maxA
//         } else {
//             console.log("Not checking for: ", ele.val)
//         }
//     }
//     return maxV
// }



var largestRectangleArea = function (heights) {
    let s = [];
    let maxA = 0;
    for (let i = 0; i < heights.length; i++) {
        let ch = heights[i];
        if (s.length === 0) {
            s.push([i, ch]);
        } else {
            let wi = i;
            while (s.length && s[s.length - 1][1] > ch) {
                let temp = s.pop();
                maxA = Math.max(((i - temp[0]) * temp[1]), maxA)
                wi = temp[0]
            }
            s.push([wi, ch]);
        }
    }
    console.log(s)
    for (let item of s) {
        maxA = Math.max(maxA, ((heights.length - item[0]) * item[1]))
    }
    return maxA;
}


console.log(largestRectangleArea([4, 2, 0, 3, 2, 5]))