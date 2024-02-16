// 함수를 표현하는 다른 방식: 화살표 함수

// 기존 함수 선언식
function foo1() {
  return "bar";
}

// 기존 함수 표현식
const foo2 = function () {
  return "bar";
};

// 화살표 함수
// 표현식 본문 (function body)
const arrowFoo = () => "bar";
// eslint-disable-next-line prettier/prettier
const arrowFooParentheses = () => ("bar");

// 블록 본문 (block body)
const arrowFooBlockBody = () => {
  return "bar";
};

// 간단한 함수를 선언할 때 코드 흐름을 간결하게 표현할 수 있다.
const isEven = (num) => num % 2 === 0;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter(isEven); // [2, 4, 6, 8, 10]

/**
 *  ... 핵심적인 내용은 여기까지인데, 알면 좋은 번거로운 디테일이 조금 있다.
 * - `this`가 없다. -> Lexical This
 * - 그래서 클래스의 메서드로 쓸 수 없다.
 *
 * 자세한 학습은 MDN이나 모던 자바스크립트 튜토리얼, 두 사이트를 추천한다.
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * https://ko.javascript.info/arrow-functions-basics
 *
 */

/**
 * 아래 함수를 화살표 함수로 바꾸세요.
 * - 함수 이름은 변경하지 마세요.
 * - export const testFuncs는 변경하지 마세요.
 */

function addNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

function concatStrings(str1, str2, str3) {
  return str1.concat(str2).concat(str3);
}

export const testFuncs = {
  addNumbers,
  concatStrings,
};
