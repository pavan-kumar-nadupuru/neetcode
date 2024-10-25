
var MinStack = function () {
    this.stack = [];
    this.minArr = [];
    this.len = 0;
    this.min = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val);
    if (this.min === null) {
        this.min = val;
    }
    this.min = Math.min(this.min, val);
    this.minArr.push(this.min);
    this.len += 1

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
    this.minArr.pop();
    this.len -= 1;
    this.min = this.len < 1 ? null : this.minArr[this.len - 1];

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.len - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

var obj = new MinStack()
obj.push(2147483646);
console.log(obj);
obj.push(2147483646);
console.log(obj);
obj.push(2147483647);
console.log(obj);
obj.top();
console.log(obj);
obj.pop();
console.log(obj);
obj.getMin();
console.log(obj);
obj.pop();
console.log(obj);
obj.getMin();
console.log(obj);
obj.pop();
console.log(obj);
obj.push(2147483647);
console.log(obj);
obj.top();
console.log(obj);
obj.getMin();
console.log(obj);
obj.push(-2147483648);
console.log(obj);
obj.top();
console.log(obj);
obj.getMin();
console.log(obj);
obj.pop();
console.log(obj);
obj.getMin();
console.log(obj);

