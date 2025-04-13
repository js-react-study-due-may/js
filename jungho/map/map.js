// 1. 화살표 함수로 콜백 호출 시
Array.prototype.myMap = function(callback) {
    const result = [];
    
    for(let i = 0 ; i < this.length ; i++){
        const value = callback(this[i], i, this);
        result.push(value);
    }
    return result;
}

const arr1 = [1, 2, 3];

const test1 = arr1.myMap((value, index, array) => value * 2);

console.log(test1); // [2, 4, 6];

// 2. 일반 함수로 콜백 호출 시

Array.prototype.myMap(function(value, index, array){
    const result = [];
    for(let i = 0 ; i < this.length ; i++){
        const value = callback(this[i], i, this);
        result.push(value);
    }
    return result;
}.bind(this));


const arr2 = [1, 2, 3];

const test2 = arr2.myMap((value, index, array) => value * 2);

console.log(test2); // [2, 4, 6];