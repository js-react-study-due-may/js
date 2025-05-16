function customMap<T, U>(
  arr: T[],
  callback: (value: T, index: number, arr: T[]) => U
): U[] {
  const result: U[] = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

const testInput = [1, 2, , 4, undefined];
const expectedResult = testInput.map((v, i, arr) =>
  v !== undefined ? v * 2 : undefined
);
const actualResult = customMap(testInput, (v, i, arr) =>
  v !== undefined ? v * 2 : undefined
);

console.log(expectedResult); // [ 2, 4, <1 empty item>, 8, undefined ]
console.log(actualResult); // [ 2, 4, undefined, 8, undefined ]
console.log(
  "결과:",
  JSON.stringify(actualResult) === JSON.stringify(expectedResult)
);
