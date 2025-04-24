// flatMap.ts
export {};

Array.prototype.myFlatMap = function(callback) {
    return this.reduce((acc, current) => {
        const mappedValue = callback(current);
        return acc.concat(mappedValue);
    }, []);
};

// 사용 예시
const arr = [1, 2, 3, [1, 2, 3]];
console.log(arr.myFlatMap(v => [v, v + 1]));

arr.flatMap()