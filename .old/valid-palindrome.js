/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase()
    let alphaNumeric = new Set('qwertyuiopasdfghjklzxcvbnm1234567890')
    s = s.split('').filter(val => alphaNumeric.has(val)).join('')
    for (let i = 0, j = s.length - 1; i < s.length && i < j && j > 0; i++, j--) {
        if(s[i]!=s[j]){
            return false;
        }
    }
    return true;
};