// reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고,
// 하나의 결과값을 반환합니다.
// callback(accumulator, currentValue, currentIndex, array)

function customReduceJS(array, callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
  }
  return acc;
}

console.log(customReduceJS([1, 2, 3], (acc, cur) => acc + cur, 0)); // 6
