/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let arr = []
    let dp = new Map();
    for (let ind = 0; ind < temperatures.length; ind++) {
        let current = temperatures[ind];
        if (dp.has(current) && dp.get(current) >= ind) {
            arr.push(dp.get(current) - ind)
        } else {
            let temp = ind + 1;
            while (temp < temperatures.length && temperatures[temp] <= current) {
                temp++
            }
            let curVal = temperatures[temp] !== undefined ? temp - ind : 0;
            arr.push(curVal);
            dp.set(current, curVal !== 0 ? temp : ind);
        }
    }
    return arr
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))