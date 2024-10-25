/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let open = new Set(['(', '{', '[']);
    let close = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let i of s) {
        if (open.has(i)) {
            stack.push(i);
        } else {
            const a = stack.pop();
            if (a !== close[i])
                return false
        }
    }
    if (stack.length === 0)
        return true
    return false
};

console.log(isValid('{{{()}}}'))