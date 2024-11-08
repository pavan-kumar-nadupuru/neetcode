var checkInclusion = function (s1, s2) {
    function check(m1, m2) {
        for (let [c, co] of m2) {
            if ((m1.get(c) || 0) !== co) {
                return false;
            }
        }
        return true;
    }
    if (s2.length < s1.length) {
        return false;
    }
    let s1M = new Map();
    for (let c of s1) {
        s1M.set(c, (s1M.get(c) || 0) + 1);
    }
    let l = 0;
    let r = 0;
    let s2M = new Map();
    while (r < s2.length) {
        s2M.set(s2[r], (s2M.get(s2[r]) || 0) + 1);
        if (r - l + 1 < s1.length) {
            r++;
        } else {
            if (check(s1M, s2M)) {
                return true;
            }
            s2M.set(s2[l], (s2M.get(s2[l]) - 1));
            l++;
            r++;
        }
    }
    return false;
};


console.log(checkInclusion("ab", "eidbaooo"))