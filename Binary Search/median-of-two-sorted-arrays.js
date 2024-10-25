/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let A, B;
    let half = ~~((nums1.length + nums2.length) / 2);
    if (nums1.length < nums2.length) {
        A = nums1;
        B = nums2;
    } else {
        B = nums1;
        A = nums2;
    }


    let s = 0;
    let e = A.length - 1;
    while (true) {
        let m = Math.floor((s + e) / 2);
        let M = half - m - 2;

        let Al = m >= 0 ? A[m] : Number(-Infinity);
        let Ar = (m + 1) < A.length ? A[m + 1] : Number(Infinity)
        let Bl = M >= 0 ? B[M] : Number(-Infinity);
        let Br = (M + 1) < B.length ? B[M + 1] : Number(Infinity);
        if (Al <= Br && Bl <= Ar) {
            if ((nums1.length + nums2.length) % 2 === 1) {
                return Math.min(Ar, Br);
            }
            return (Math.min(Ar, Br) + Math.max(Al, Bl)) / 2;
        } else {
            if (Al > Br) {
                e = m - 1;
            } else {
                s = m + 1;
            }
        }

    }
};


console.log(findMedianSortedArrays([1, 2], [3]));