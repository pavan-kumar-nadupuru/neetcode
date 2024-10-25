
var TimeMap = function () {
    this.m = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.m.has(key)) {
        this.m.set(key, []);
    }
    this.m.get(key).push([value, timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    const arr = this.m.get(key);
    if (!arr)
        return ""
    let ans = "";
    let s = 0;
    let e = arr.length - 1;
    while (s <= e) {
        let m = ~~((s + e) / 2);
        if (arr[m][1] == timestamp) {
            return arr[m][0];
        }
        if (arr[m][1] < timestamp) {
            ans = arr[m][0];
            s = m + 1;
        } else {
            e = m - 1;
        }
    }
    return ans;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */