/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// var dailyTemperatures = function (temperatures) {
//     let ans = [];
//     for (let i = 0; i < temperatures.length; i++) {
//         const cur = temperatures[i];
//         let count = 1;
//         let found = false;
//         for (let j = i + 1; j < temperatures.length; j++) {
//             if (temperatures[j] === cur) {
//                 continue
//             }
//             if (temperatures[j] > cur) {
//                 ans.push(count);
//                 found = true;
//                 break;
//             }
//             count++;
//         }
//         if (!found)
//             ans.push(0);
//     }
//     return ans;
// };

// var dailyTemperatures = function (temperatures) {
//     let s = [];
//     let top = null;
//     let ans = temperatures.map(i => 0);
//     for (let i = 0; i < temperatures.length; i++) {
//         if (!top || top >= temperatures[i]) {
//             s.push({ val: temperatures[i], ind: i });
//             top = temperatures[i];
//         } else {
//             while (top && top < temperatures[i]) {
//                 let t = s.pop();
//                 ans[t.ind] = i - t.ind;
//                 top = s.length > 0 ? s[s.length - 1].val : null;
//             }
//             s.push(({ val: temperatures[i], ind: i }));
//             top = s.length > 0 ? s[s.length - 1].val : null;

//         }
//     }
//     return ans;
// };


var dailyTemperatures = function (temperatures) {
    let s = [];
    let ans = temperatures.map(i => 0);
    for (let i = 0; i < temperatures.length; i++) {
        if (s.length === 0 || s[s.length - 1] >= temperatures[i]) {
            s.push({ val: temperatures[i], ind: i });
        } else {
            while (s.length > 0 && s[s.length - 1].val < temperatures[i]) {
                let t = s.pop();
                ans[t.ind] = i - t.ind;
            }
            s.push(({ val: temperatures[i], ind: i }));

        }
    }
    return ans;
};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))