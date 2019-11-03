/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.number = 0;
    this.storage = {};
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.storage[this.number] = x;
    this.number += 1;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const result = this.storage[this.number - this.number];
    delete this.storage[this.number];
    this.number -= 1;
    return result;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.storage[this.number]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.number === 0) return true;
    else return false;
};



/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */