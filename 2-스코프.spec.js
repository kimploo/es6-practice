import { expect, test } from "vitest";
const STUDENT = process.env.MODE === "student";
const REFERENCE = process.env.MODE === "reference";

if (STUDENT) {
  const { funcScope, funcScopeWithVar, funcScopeWithVar2, parameter } = await import("./2-스코프");

  test('"전역 스코프 변수"를 리턴하세요.', () => {
    expect(funcScope()).toBe("전역 스코프 변수");
  });

  test('"funcScopeWithVar 함수 스코프 변수"를 리턴하세요.', () => {
    expect(funcScopeWithVar()).toBe("funcScopeWithVar 함수 스코프 변수");
  });

  test("funcScopeWithVar2 함수 스코프의 매개변수 variable을 리턴하세요.", () => {
    expect(funcScopeWithVar2("뉴진스의 하입보이요")).toBe("뉴진스의 하입보이요");
  });

  test('parameter의 값은 "매개변수 variable"입니다.', () => {
    expect(parameter).toBe("매개변수 variable");
  });
}

if (REFERENCE) {
  const { funcScope, funcScopeWithVar, funcScopeWithVar2, parameter } = await import("./2-스코프.reference");
  test('"전역 스코프 변수"를 리턴하세요.', () => {
    expect(funcScope()).toBe("전역 스코프 변수");
  });

  test('"funcScopeWithVar 함수 스코프 변수"를 리턴하세요.', () => {
    expect(funcScopeWithVar()).toBe("funcScopeWithVar 함수 스코프 변수");
  });

  test("funcScopeWithVar2 함수 스코프의 매개변수 variable을 리턴하세요.", () => {
    expect(funcScopeWithVar2("뉴진스의 하입보이요")).toBe("뉴진스의 하입보이요");
  });

  test('parameter의 값은 "매개변수 variable"입니다.', () => {
    expect(parameter).toBe("매개변수 variable");
  });
}
