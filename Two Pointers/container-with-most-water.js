/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let start = 0;
    let end = height.length - 1;
    let area = 0;
    while (start < end) {
        console.log("Area prev: ", area);
        area = Math.max(((end - start) * Math.min(height[start], height[end])), area)
        console.log("Area post: ", area);
        if (height[start] < height[end])
            start++;
        else
            end--;
    }
    return area;
};

console.log(maxArea([8, 7, 2, 1]))