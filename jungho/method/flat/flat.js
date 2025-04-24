var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Array.prototype.myFlat = function (depth) {
    if (depth === void 0) { depth = 1; }
    var stack = __spreadArray([], this.map(function (item) { return [item, depth]; }), true);
    var result = [];
    var _loop_1 = function () {
        var _a = stack.pop(), current = _a[0], currentDepth = _a[1];
        if (Array.isArray(current) && currentDepth > 0) {
            stack.push.apply(stack, current.map(function (item) { return [item, currentDepth - 1]; }));
        }
        else {
            result.push(current);
        }
    };
    while (stack.length > 0) {
        _loop_1();
    }
    return result.reverse();
};
var arr = [1, 2, 3, [1, 2, 3]];
console.log(arr.myFlat());
export {};
