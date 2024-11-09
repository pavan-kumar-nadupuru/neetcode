/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let l = 0;
    if (t.length > s.length) {
        return "";
    }
    let tM = new Map();
    for (let c of t) {
        tM.set(c, (tM.get(c) || 0) + 1);
    }
    let sM = new Map();
    let have = 0
    let need = tM.size;
    let curMin = Number(Infinity);
    let ind = [-1, -1];
    for (let r = 0; r < s.length; r++) {
        sM.set(s[r], (sM.get(s[r]) || 0) + 1);
        if (tM.get(s[r]) && tM.get(s[r]) === sM.get(s[r])) {
            have += 1;
        }
        while (l <= r && have === need) {
            if (r - l + 1 < curMin) {
                ind = [l, r];
                curMin = r - l + 1;
            }
            let cur = sM.get(s[l]);
            if (tM.has(s[l]) && cur === tM.get(s[l])) {
                have--;
            }
            if (cur === 1) {
                sM.delete(s[l]);
            } else {
                sM.set(s[l], cur - 1);
            }
            l++;
        }
    }
    return s.slice(ind[0], ind[1] + 1);
}

console.log(minWindow("ADOBECODEBANC", "ABC"))