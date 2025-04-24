Array.prototype.myFilter = function (condition) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        var result = condition(this[i], i, this);
        if (result) {
            arr.push(this[i]);
        }
    }
    return arr;
};
var arr = [1, 2, 3];
var test = arr.myFilter(function (v) { return v > 1; });
console.log(test);
export {};
