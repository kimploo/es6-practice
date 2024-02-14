import { ajeTest } from "./lib/ajeTest";
/**
 * 아래 함수의 에러를 해결하고,
 * ajeTest함수가 '머리부터 발끝까지 핫 이슈'를 리턴하도록 코드를 작성하세요.
 */
export function declarationLet() {
  const question = "머리부터 발끝까지";
  const age = 30;
  return ajeTest(question, age);
}

/**
 * 아래 함수의 에러를 해결하고,
 * ajeTest함수가 '머리부터 발끝까지 핫 이슈'를 리턴하도록 코드를 작성하세요.
 */
export function declarationConst() {
  const question = "머리부터 발끝까지";
  const age = 30;
  // question = "여보세요";
  return ajeTest(question, age);
}
