// 스코프: 변수에 접근할 수 있는 범위, 변수의 유효범위
const language = "JavaScript";
if (true) {
  console.log(language); // JavaScript
  const book = "Clean Code";
}
console.log(book); // Uncaught ReferenceError: book is not defined
// 참조에러 -> 변수가 어디있는지 찾을 수 없다. -> 변수에 접근할 수 없다.

// 스코프 === 블라인드 창문
// 안쪽 중괄호에서 바깥쪽 중괄호에 있는 변수에 접근할 수 있다. (안 -> 밖 🙆)
// 바깥쪽 중괄호에서 안쪽 중괄호에 있는 변수에 접근할 수 없다. (밖 -> 안 🙅)

// 끝!
