/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stackData = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stackData.push(x);
    return this.stackData
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
        this.stackData.pop();
    return this.stackData
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.stackData.length > 0) {
        return this.stackData[this.stackData.length - 1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
        return Math.min(...this.stackData);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
