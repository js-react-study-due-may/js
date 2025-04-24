// T로 이루어진 Array에서 U라는 value를 사용하여 U배열을 완성
// const strings = numbers.myMap(n => n.toString());  // U는 string 타입
// 1. 화살표 함수로 콜백 호출 시
Array.prototype.myMap = function (callback) {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        var value = callback(this[i], i, this);
        result.push(value);
    }
    return result;
};
var arr1 = [1, 2, 3];
var test1 = arr1.myMap(function (value, index, array) { return value * 2; });
console.log(test1); // [2, 4, 6];
