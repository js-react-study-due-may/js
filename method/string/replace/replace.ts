function customReplaceTS(
  str: string,
  searchValue: string,
  replaceValue: string
): string {
  const index = str.indexOf(searchValue);
  if (index === -1) return str;
  return (
    str.slice(0, index) + replaceValue + str.slice(index + searchValue.length)
  );
}

console.log(customReplaceTS("hello world", "world", "TS")); // hello TS
