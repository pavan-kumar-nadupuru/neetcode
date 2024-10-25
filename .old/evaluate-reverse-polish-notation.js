/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    let first, second;
    for(let token of tokens){
        switch(token){
            case '+':
                second = stack.pop()
                first = stack.pop()
                stack.push(first + second)
            break

            case '-':
                second = stack.pop()
                first = stack.pop()
                stack.push(first - second)
                break

            case '*':
                second = stack.pop()
                first = stack.pop()
                stack.push(first * second)
                break

            case '/':
                second = stack.pop()
                first = stack.pop()
                stack.push(parseInt(first / second))
                break

            default:
                stack.push(parseInt(token))
            break
        }
    }
    return stack.pop()
};

console.log(evalRPN(["2","1","+","3","*"]))