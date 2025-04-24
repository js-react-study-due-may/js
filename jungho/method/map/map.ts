// T로 이루어진 Array에서 U라는 value를 사용하여 U배열을 완성
// const strings = numbers.myMap(n => n.toString());  // U는 string 타입

// 1. 화살표 함수로 콜백 호출 시
Array.prototype.myMap = function<T, U>(callback: (value: T, index: number, array: T[]) => U): U[] {
    const result: U[] = [];
    
    for(let i = 0 ; i < this.length ; i++){
        const value = callback(this[i], i, this);
        result.push(value);
    }
    return result;
}

const arr1 = [1, 2, 3];

const test1 = arr1.myMap((value, index, array) => value * 2);

console.log(test1); // [2, 4, 6];