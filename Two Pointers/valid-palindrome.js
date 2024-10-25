/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.trim();
    const chars = new Set('qwertyuiopasdfghjklzxcvbnm'.split(""));
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (!chars.has(s.charAt(start).toLocaleLowerCase())) {
            start++;
            continue;
        }
        if (!chars.has(s.charAt(end).toLocaleLowerCase())) {
            end--;
            continue
        }
        if (s.charAt(start).toLocaleLowerCase() != s.charAt(end).toLocaleLowerCase()) {
            return false;
        }
        start++;
        end--;
    }
    return true
};


console.log(isPalindrome('rac    234,e car'))