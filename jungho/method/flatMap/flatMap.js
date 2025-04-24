Array.prototype.myFlatMap = function (callback) {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        var mappedValue = callback(this[i], i, this);
        if (Array.isArray(mappedValue)) {
            result.push.apply(result, mappedValue);
        }
        else {
            result.push(mappedValue);
        }
    }
    return result;
};
export {};
