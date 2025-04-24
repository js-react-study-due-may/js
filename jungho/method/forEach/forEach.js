Array.prototype.myForEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
var arr = [1, 2, 3];
var test = arr.myForEach(function (v, i, a) { return console.log(v); });
export {};
