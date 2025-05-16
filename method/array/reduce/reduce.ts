function customReduceTS<T, U>(
  array: T[],
  callback: (accumulator: U, current: T, index: number, array: T[]) => U,
  initialValue: U
): U {
  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
  }
  return acc;
}

console.log(customReduceTS([1, 2, 3], (acc, cur) => acc + cur, 0)); // 6
