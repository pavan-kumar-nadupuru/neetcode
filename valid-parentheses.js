/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let st = []
    for(let i of s){
        console.log(st, i)
        if(i=='(' || i=='{' || i == '['){
            st.push(i)
        } else {
            if(!st.length){
                return false
            }
            if(i == '}'){
                if(st.pop() != '{'){
                    return false
                }
            } else if(i == ')'){
                if(st.pop() != '('){
                    return false
                }
            } else {
                if(st.pop() != '['){
                    return false
                }
            }
        }
    }
    return st.length == 0
};

console.log(isValid("()[]{}")) // true