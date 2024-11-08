/**
 * @param {number[][]} cars
 * @return {number[]}
 */

function whenWillMeet(s1, u1, s2, u2) {
    if (u2 === u1) {
        return -1;
    }
    return ((s1 - s2) / (u2 - u1));
}
// var getCollisionTimes = function (cars) {
//     let s = [];
//     let ans = new Array(cars.length).fill(-1);
//     s.push(cars[cars.length - 1]);
//     for (let i = cars.length - 2; i > 0; i--) {
//         while (s.length > 0) {
//             let [s1, u1] = [...s[s.length - 1][0]];
//             let [s2, u2] = [...cars[i]];
//             let meetsAt = whenWillMeet(s1, u1, s2, u2);
//             if (meetsAt <= 0) {
//                 // s.push([[s2, u2], i]);
//                 break;
//             } else {
//                 let ind = s.pop()[1];
//                 ans[ind] = meetsAt;
//             }
//         }
//         s.push([[cars[i][0], cars[i][1]], i]);
//         // }
//     }
//     return ans;
// };

var getCollisionTimes = function (cars) {
    let stack = [];
    let res = new Array(cars.length).fill(-1);
    stack.push([...cars.pop(), Number(Infinity)]);
    for (let i = cars.length - 1; i >= 0; i--) {
        while (stack.length && (stack[stack.length - 1][1] >= cars[i][1] || stack[stack.length - 1][2] < (whenWillMeet(stack[stack.length - 1][0], stack[stack.length - 1][1], cars[i][0], cars[i][1])))) {
            stack.pop();
        }
        if (stack.length) {
            res[i] = whenWillMeet(stack[stack.length - 1][0], stack[stack.length - 1][1], cars[i][0], cars[i][1]);
        }
        stack.push([...cars[i], res[i] > -1 ? res[i] : Number(Infinity)]);
    }
    return res
}

console.log(getCollisionTimes([[1, 2], [2, 1], [4, 3], [7, 2]]));