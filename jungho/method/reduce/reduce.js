Array.prototype.myReduce = function (callback, initialValue) {
    var accumulator = initialValue !== undefined ? initialValue : this[0];
    var startIndex = initialValue !== undefined ? 0 : 1;
    for (var i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], this);
    }
    return accumulator;
};
var arr = [1, 2, 3];
var test = arr.myReduce(function (p, c, arr) { return p + c; }, 2);
console.log(test);
export {};
