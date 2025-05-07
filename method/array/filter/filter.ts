function customFilterTS<T>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => boolean
): T[] {
  const result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(customFilterTS([1, 2, 3, 4], (x) => x % 2 === 0)); // [2, 4]
