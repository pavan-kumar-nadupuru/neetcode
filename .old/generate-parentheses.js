/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let maxN = parseInt((2**(n*2)) - 1)
    let arr = [];
    for(let i = 1; i<maxN; i++){
        let temp = parseInt(''+i).toString(2).padStart(n*2, '0');
        let stack = []
        for(let t of temp){
            // console.log(stack, t)
            if(t == 0){
                stack.push(t)
            } else {
                if(stack.pop() != 0){
                    stack.push('no')
                    break
                }
            }
        }
        if(stack.length == 0){
            let ts = '';
            for(let i of temp){
                ts += (i == 0 ? '(' : ')')
            }
            arr.push(ts)
        }
    }
    return arr
};


console.log(generateParenthesis(3))