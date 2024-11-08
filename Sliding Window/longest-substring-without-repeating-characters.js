/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let ans = 0;
    let set = new Set();
    let l = 0;
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            while (set.has(s[i]) && set.size && l <= i) {
                set.delete(s[l]);
                l++;
            }
        }
        set.add(s[i]);
        ans = Math.max(ans, r - l + 1);
    }
    return ans;

};



// var lengthOfLongestSubstring = function (s) {
//     let l = 0;
//     let r = 1;
//     if (s.length === 1) {
//         return 1;
//     }
//     let ans = 1;
//     while (r < s.length) {
//         let temp = s.slice(l, r).split("");
//         if (temp.length === new Set(temp).size) {
//             ans = Math.max(ans, r - l);
//             r++;
//         } else {
//             l++;
//         }
//     }
//     return ans;
// }

console.log(lengthOfLongestSubstring("jbpnbwwd"))