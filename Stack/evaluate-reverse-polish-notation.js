// /**
//  * @param {string[]} tokens
//  * @return {number}
//  */
// var evalRPN = function (tokens) {
//     function perform(a, b, op) {
//         switch (op) {
//             case "+": return a + b;
//             case "-": return a - b
//             case "*": return a * b
//             case "/": {
//                 let t = a / b;
//                 if (t < 0) {
//                     return Math.ceil(t);
//                 }
//                 return Math.floor(t);
//             }
//         }
//     }
//     console.log(perform(6, -132, '/'))
//     let s = [];
//     for (let t of tokens) {
//         if (!isNaN(Number(t))) {
//             s.push(Number(t));
//         } else {
//             let op2 = s.pop();
//             let op1 = s.pop();
//             s.push(perform(op1, op2, t))
//         }
//         console.log(s);
//     }
//     if (s.length !== 1) {
//         return s;
//     }
//     return s[0];
// };





/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let s = [];
    const ops = new Set(['+', '-', "/", '*']);
    for (let t of tokens) {
        if (!ops.has(t)) {
            s.push(Number(t));
        } else {
            let b = s.pop();
            let a = s.pop();
            if (t === "+") {
                s.push((a + b));
            }
            if (t === "-") {
                s.push((a - b));
            }
            if (t === "/") {
                s.push(~~(a / b));
            }
            if (t === "*") {
                s.push((a * b));
            }
        }
    }
    if (s.length !== 1) {
        return s;
    }
    return s[0];
};

console.log(evalRPN(["4", "-2", "/", "2", "-3", "-", "-"]))