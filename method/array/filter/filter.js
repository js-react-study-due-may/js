function customFilterJS(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(customFilter([1, 2, 3, 4], (x) => x % 2 === 0)); // [2, 4]
