/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// var ladderLength = function (beginWord, endWord, wordList) {
//     let wordSet = new Set(wordList);
//     let q = [[beginWord, 1]];
//     let seen = new Set();
//     let chars = "qwertyuiopasdfghjklzxcvbnm".split("");
//     while (q.length) {
//         const [curWord, distance] = q.shift();
//         if (curWord == endWord) {
//             return distance;
//         }
//         seen.add(curWord);
//         for (let w = 0; w < curWord.length; w++) {
//             for (let i = 0; i < chars.length; i++) {
//                 if (curWord[w] == chars[i]) continue; // Ignore current char
//                 let newWord = curWord.slice(0, w) + chars[i] + curWord.slice(w + 1);
//                 if (seen.has(newWord)) continue; // We saw this word alredy
//                 if (!wordSet.has(newWord)) continue; // This word is not in our dict
//                 q.push([newWord, distance + 1]); // Valid, add to queue
//                 seen.add(newWord)
//             }
//         }
//     }
//     return 0;
// };

var ladderLength = function (beginWord, endWord, wordList) {
    // Return bool
    // Checks if 2 string are the same excpet for one character
    function offByOne(str1, str2) {
        let diff = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] != str2[i]) {
                diff++;
            }
            if (diff > 1) {
                return false;
            }
        }
        return diff == 1;
    }
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0; // word list has no end word
    let q = [[beginWord, 1]];
    let seen = new Set();
    while (q.length) {
        let [cur, dist] = q.shift();
        if (cur == endWord) return dist;
        for (let pos of wordList) {
            if (offByOne(pos, cur) && !seen.has(pos)) {
                q.push([pos, dist + 1]);
                seen.add(pos);
            }
        }
    }
    return 0;
};
// @lc code=end

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))