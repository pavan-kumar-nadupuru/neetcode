/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const sortedStrs = strs.map(s => {
        return s.split("").sort().join("");
    })
    let m = new Map();
    for (let i = 0; i < sortedStrs.length; i++) {
        if (m.has(sortedStrs[i])) {
            m.set(sortedStrs[i], [...m.get(sortedStrs[i]), strs[i]])
        } else {
            m.set(sortedStrs[i], [strs[i]])
        }
    }
    return Array.from(m.values());
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))