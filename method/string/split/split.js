// split() 메서드는 지정한 구분자를 이용하여 문자를 잘라 배열로 반환한다.

function customSplitJS(str, separator) {
  const result = [];
  let start = 0;

  // 구분자가 빈 문자열인 경우, 한 글자씩 분리
  if (separator === "") {
    for (let i = 0; i < str.length; i++) {
      result.push(str[i]);
    }
    return result;
  }

  while (true) {
    // indexOf() 메서드는
    // 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고,
    // 찾을 수 없는 경우 -1을 반환
    const index = str.indexOf(separator, start);

    if (index === -1) {
      result.push(str.slice(start)); // 나머지 부분 추가
      break;
    }
    result.push(str.slice(start, index)); // 구분자 앞 부분 추가
    start = index + separator.length; // 다음 시작 위치로 이동
  }
  return result;
}

console.log(customSplitJS("a::b::c", "::")); // ['a', 'b', 'c']
console.log(customSplitJS("hello world", " ")); // ['hello', 'world']
console.log(customSplitJS("abc", "")); // ['a', 'b', 'c']
console.log(customSplitJS("apple", "-")); // ['apple']
