
function encode(strs) {
    let ans = ""
    for (let s of strs) {
        ans = ans + String(s.length) + "-" + s
    }
    return ans
}


function decode(str) {
    let ans = [];
    let i = 0;
    while (i < str.length) {
        let count = "";
        while (str.charAt(i) != "-") {
            count += str.charAt(i);
            i++
        }
        count = Number(count);
        i++;
        let e = "";
        while (count > 0) {
            console.log("e", e)
            count--;
            e += str.charAt(i);
            i++;
        }
        ans.push(e);
    }
    return ans
}


console.log(decode(encode(["i", "am", "groot"])))
