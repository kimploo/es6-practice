import { ajeTest } from "./lib/ajeTest";

// var: ES6 이전에 변수 선언 방법. 재할당, 재선언 가능
var varNum = 0;

// 재선언 가능 (🙅 BAD)
// 변수의 재선언은 기존 코드의 실행에 방해가 될 수 있어 권장하지 않음 (마음의 소리: 절대 하지 마세요!)
var varNum = 10;

// 재할당 가능
varNum = 100;

// let: ES6 이후의 변수 선언 방법, 재할당 가능, 재선언 불가
let letNum = 0;

// 재할당 가능
// letNum = 10;

// 재선언 불가
// SyntaxError: Identifier 'letNum' has already been declared
// let letNum = 100;

// const: constant variable의 약자, 재할당, 재선언 불가
const DEV_ENV = process.env.NODE_ENV;

// 재할당 불가
// TypeError: Assignment to constant variable.
// DEV_ENV = 'production';

/**
 * 제 경험 + 리서치를 통한 저만의 휴리스틱
 * 
 * 마음의 소리 1: var는 기억에서 지우세요.
 * 마음의 소리 2: 일단 const로 변수 선언하고, 재할당이 정말 정말 꼭 필요한 경우에 let으로 바꿔서 쓰세요.
 * 
 * 구글 선배님들도 const를 기본으로 권장
 * https://google.github.io/styleguide/jsguide.html#features-use-const-and-let
 * 
 */

/**
 * 아래 함수의 에러를 해결하고,
 * ajeTest함수가 '머리부터 발끝까지 핫 이슈'를 리턴하도록 코드를 작성하세요.
 */
var age = 10;
export function declarationLet() {
  let question = "머리부터 발끝까지";
  let question = '여보세요';
  return ajeTest(question, age);
}

/**
 * 아래 함수의 에러를 해결하고,
 * ajeTest함수가 '머리부터 발끝까지 핫 이슈'를 리턴하도록 코드를 작성하세요.
 */
export function declarationConst() {
  const question = "머리부터 발끝까지";
  const age = 30;
  question = "여보세요";
  return ajeTest(question, age);
}
