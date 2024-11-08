var characterReplacement = function (s, k) {
    let l = 0;
    let m = new Map();
    let ans = 0;
    for (let r = 0; r < s.length; r++) {
        m.set(s[r], ((m.get(s[r]) || 0) + 1));
        let most = Math.max(...m.values());
        while (r - l + 1 - most > k) {
            m.set(s[l], (m.get(s[l]) && m.get(s[l]) > 0 ? m.get(s[l]) - 1 : 0));
            l++;
        }
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
};

console.log(characterReplacement("AABABBA", 1));