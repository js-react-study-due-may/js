// map()
// 1. 주어진 callbackFn 함수를 배열의 각 요소에 대해 한 번씩 호출하여, 그 결과로 새로운 배열을 생성한다.
// 2. 배열의 모든 인덱스를 순회하지만, 실제로 존재하는 요소만을 대상으로 콜백을 실행한다.
//    - undefined 값 콜백 실행 O
//    - 빈 슬롯: 인덱스가 존재하지 않는 요소로, 콜백 실행 X

function myMap(arr, callback) {
  const result = [];

  // for루프는 undefine이든 비어 있든 i 순회
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

const input = [1, 2, , 4, undefined];
const expected = input.map((v) => v * 2);
const actual = myMap(input, (v) => v * 2);

console.log(expected); // [ 2, 4, <1 empty item>, 8, NaN ]
console.log(actual); // [ 2, 4, NaN, 8, NaN ]

// 값만 비교하기 위해 문자열로 변환해서 비교함.
// JSON.stringify()는 빈 슬롯과 NaN를 null로 변환
console.log("결과:", JSON.stringify(actual) === JSON.stringify(expected)); // true
