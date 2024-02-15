let variable = "전역 스코프 변수";

// "전역 스코프 변수"를 리턴하세요.
export function funcScope() {
  return variable;
}

// "funcScopeWithVar 함수 스코프 변수"를 리턴하세요.
export function funcScopeWithVar() {
  const variable = "funcScopeWithVar 함수 스코프 변수";
  return variable;
}

// 아래 함수 스코프의 매개변수 variable을 리턴하세요.
export function funcScopeWithVar2(variable) {
  return variable;
}

export const parameter = funcScopeWithVar2("매개변수 variable");
