let s = ["s1", "s2", "s3", "s4"];
let ans = [];

function bt(s, pos) {
    if (!s.length) {
        ans.push(pos)
        return;
    }
    let seen = s.shift()
    pos.add(seen);
    for (let i of s) {
        bt(s.slice(1), pos);
    }
}
bt(s, new Set())
console.log(ans);