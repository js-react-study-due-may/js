function customSplitTS(str: string, separator: string): string[] {
  const result: string[] = [];
  let start = 0;

  if (separator === "") {
    for (let i = 0; i < str.length; i++) {
      result.push(str[i]);
    }
    return result;
  }

  while (true) {
    const index = str.indexOf(separator, start);
    if (index === -1) {
      result.push(str.slice(start));
      break;
    }
    result.push(str.slice(start, index));
    start = index + separator.length;
  }

  return result;
}

console.log(customSplitTS("a::b::c", "::")); // ['a', 'b', 'c']
console.log(customSplitTS("hello world", " ")); // ['hello', 'world']
console.log(customSplitTS("abc", "")); // ['a', 'b', 'c']
console.log(customSplitTS("apple", "-")); // ['apple']
