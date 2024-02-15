// 스코프: 변수에 접근할 수 있는 범위, 변수의 유효범위, "중괄호"

// 원칙 1. 스코프 === 블라인드 창문
// 안쪽 중괄호에서 바깥쪽 중괄호에 있는 변수에 접근할 수 있다. (안 -> 밖 🙆)
// 바깥쪽 중괄호에서 안쪽 중괄호에 있는 변수에 접근할 수 없다. (밖 -> 안 🙅)

// 전역 스코프의 변수 language
const language = "JavaScript";
if (true) {
  console.log(language); // JavaScript

  // 조건문 블록 스코프의 변수 book
  const book = "Clean Code";
}

// 전역 스코프에서는 조건문 블록 스코프의 변수에 접근할 수 없다.
// console.log(book); // Uncaught ReferenceError: book is not defined

// 참조에러 -> 변수가 어디있는지 찾을 수 없다. -> 변수에 접근할 수 없다.

// 원칙 2. 가까운 변수 면저
// 전역 스코프와 getUserData 함수 스코프에 config라는 변수가 있다. 이 경우 "가까운 변수"를 조회한다.
// 이런 기법을 variable shadowing라고 부른다.

// 전역 스코프의 변수 config
const config = {
  mode: "development",
};

// getUserData 함수 스코프의 (매개)변수 config
function getUserData(config) {
  if (config.mode === "development") {
    return ["testUser1", "testUser2"];
  } else {
    return ["realUser1, realUser2"];
  }
}

getUserData({ mode: "production" }); // ["realUser1, realUser2"]

/**
 * TL;DR
 *
 * 여기까지만 알면 코드 작성에는 큰 어려움이 없다!
 * 하지만 내가 기술 면접을 만점을 받고 싶다면 아래 주제에 대해서 추가로 공부하시면 좋습니다.
 *
 * - 블록 스코프와 함수 스코프의 차이
 * - 변수 선언, 변수 초기화, TDZ
 * - 클로저
 */

/**
 * 주석에 맞게 코드를 작성하세요.
 */
let variable = "전역 스코프 변수";

// "전역 스코프 변수"를 리턴하세요.
export function funcScope() {}

// "funcScopeWithVar 함수 스코프 변수"를 리턴하세요
export function funcScopeWithVar() {
  const variable = "funcScopeWithVar 함수 스코프 변수";
}

// 아래 함수 스코프의 매개변수 variable을 리턴하세요
export function funcScopeWithVar2(variable) {}

export const parameter = funcScopeWithVar2("매개변수 variable");
