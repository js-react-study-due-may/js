Array.prototype.mySome = function (condition) {
    for (var i = 0; i < this.length; i++) {
        var isTrue = condition(this[i], i, this);
        if (isTrue) {
            return true;
        }
    }
    return false;
};
var arr = [1, 2, 3];
var test = arr.mySome(function (v, i, a) { return v % 2 === 0; });
console.log(test);
