1. (method) Array<number>.reduce(callbackfn: (accumulator: number, currentValue: number, currentIndex: number, array: number[]) => number): number (+2 overloads)
2. `initialVlaue` 는 optional로 초기값을 지칭, 없으면 accumulator가 초기값
3. 숫자 배열에서 사용하는 메서드이며 숫자를 반환하는 메서드
4. 배열의 모든 요소를 줄여서(reduce) 하나의 값으로 만드는 메서드
5. reduce는 콜백 함수가 누적값(accumulator)과 현재값(current)을 받아서 누적값을 반환해야 하기 때문에 한번에 해야함
