Array.prototype.myEvery = function (condition) {
    for (var i = 0; i < this.length; i++) {
        var isTrue = condition(this[i], i, this);
        if (!isTrue) {
            return false;
        }
    }
    return true;
};
var arr = [1, 2, 3];
var test = arr.myEvery(function (v) { return v === 1; });
console.log(test);
export {};
