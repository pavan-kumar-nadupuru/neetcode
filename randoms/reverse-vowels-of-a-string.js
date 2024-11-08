/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let ans = new Array(s.length).fill(NaN);
    let v = new Set('aAeEiIoOuU'.split(''))
    let left = 0;
    let right = s.length - 1;
    while (left <= right) {
        let leftChar = s[left];
        let rightChar = s[right];
        if (v.has(s.charAt(left)) && v.has(s.charAt(right))) {
            ans[right] = s.charAt(left);
            ans[left] = s.charAt(right);
            right--;
            left++;
        } else {
            if (v.has(s.charAt(left))) {
                ans[right] = s.charAt(right);
                right--;
            }
            else {
                ans[left] = s.charAt(left);
                left++;
            }
        }
    }
    return ans.join('');
};

console.log(reverseVowels("IceCreAm"))