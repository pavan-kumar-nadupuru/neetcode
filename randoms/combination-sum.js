/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function (candidates, target) {
//     candidates = candidates.sort((a, b) => a - b);
//     let ans = [];
//     let he = new Set();
//     function bt(cur, s) {
//         console.log(cur);
//         if (s === target) {
//             let temp = cur.sort((a, b) => b - a).join(":");
//             if (!he.has(temp)) {
//                 ans.push(cur);
//                 he.add(temp);
//             }
//             return;
//         }
//         for (let a of candidates) {
//             if (s + a <= target) {
//                 bt([...cur, a], s + a);
//             }
//         }
//     }
//     bt([], 0);
//     return ans;
// };


var combinationSum = function (candidates, target) {
    let penultimateAns = [];
    function bt(pow) {
        let val = 0;
        for (let i = 0; i < candidates.length; i++) {
            val = val + (candidates[i] * pow[i]);
        }
        if (val === target) {
            penultimateAns.push(pow);
            return;
        }
        if (val < target) {
            for (let x = 0; x < pow.length; x++) {
                let temp = [...pow];
                temp[x] += 1;
                bt(temp);
            }
        }
    }
    bt(new Array(candidates.length).fill(0))
    penultimateAns = penultimateAns.map(i => i.join(":"));
    penultimateAns = Array.from(new Set(penultimateAns)).map(i => i.split(":")).map(i => i.map(j => Number(j)));
    let ans = [];
    for (let x = 0; x < penultimateAns.length; x++) {
        let powers = penultimateAns[x];
        let asdf = [];
        for (let y = 0; y < powers.length; y++) {
            asdf.push(...(new Array(powers[y]).fill(candidates[y])));
        }
        ans.push(asdf);
    }
    return ans;
}
console.log(combinationSum([2, 3, 5], 8));