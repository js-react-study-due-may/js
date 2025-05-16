// replace() 메서드는 문자열에서 특정 패턴을 다른 문자열로 대체된 새로운 문자열을 반환한다.
// replace(pattern, replacement)

function customReplaceJS(str, searchValue, replaceValue) {
  const index = str.indexOf(searchValue);
  if (index === -1) return str;
  return (
    str.slice(0, index) + replaceValue + str.slice(index + searchValue.length)
  );
}

console.log(customReplaceJS("hello world", "world", "JS")); // hello JS
