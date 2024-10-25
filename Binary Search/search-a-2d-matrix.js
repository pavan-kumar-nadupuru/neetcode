/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let start = 0;
    let end = matrix.length;
    while (start < end) {
        let mid = ~~((start + end) / 2);
        let curArr = matrix[mid];
        if (!(curArr[0] <= target && curArr[curArr.length - 1] >= target)) {
            if (curArr[0] < target && curArr[curArr.length - 1] < target) {
                start = mid + 1;
            } else {
                end = mid;
            }
            continue;
        } else {
            let ls = 0;
            let rs = curArr.length;
            while (ls < rs) {
                let im = ~~((ls + rs) / 2);
                if (curArr[im] === target) {
                    return true;
                } else {
                    if (curArr[im] < target) {
                        ls = im + 1;
                    } else {
                        rs = im;
                    }
                }
            }
            return false;
        }
    }
    return false;
};

console.log(searchMatrix([[1]], 1));