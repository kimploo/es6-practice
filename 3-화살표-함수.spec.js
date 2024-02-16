import { expect, test } from "vitest";
const STUDENT = process.env.MODE === "student";
const REFERENCE = process.env.MODE === "reference";

function isArrowFunction(func) {
  const funcStr = func.toString().trim();

  // Check if the function is an arrow function
  // This is a simple check that looks for arrow function characteristics
  // It checks for function expressions that start with '(' or are directly followed by the arrow
  return /^(async\s+)?\(([^)]*)\)\s*=>/.test(funcStr) || /^(async\s+)?[^=]*=>/.test(funcStr);
}

if (STUDENT) {
  const {
    testFuncs: { addNumbers, concatStrings },
  } = await import("./3-화살표-함수");

  test("addNumbers는 화살표 함수입니다.", () => {
    expect(isArrowFunction(addNumbers)).toBeTruthy();
    expect(() => new addNumbers()).toThrow();
  });

  test("addNumbers는 숫자 3개를 더한 값을 리턴합니다.", () => {
    expect(addNumbers(1, 2, 3)).toBe(6);
  });

  test("concatStrings은 화살표 함수입니다.", () => {
    expect(isArrowFunction(concatStrings)).toBeTruthy();
    expect(() => new concatStrings()).toThrow();
  });

  test("concatStrings는 문자열 3개를 이어붙인 값을 리턴합니다.", () => {
    expect(concatStrings("hello", "world", "javascript")).toBe("helloworldjavascript");
  });
}

if (REFERENCE) {
  const {
    testFuncs: { addNumbers, concatStrings },
  } = await import("./3-화살표-함수.reference");

  test("addNumbers는 화살표 함수입니다.", () => {
    expect(isArrowFunction(addNumbers)).toBeTruthy();
    expect(() => new addNumbers()).toThrow();
  });

  test("addNumbers는 숫자 3개를 더한 값을 리턴합니다.", () => {
    expect(addNumbers(1, 2, 3)).toBe(6);
  });

  test("concatStrings은 화살표 함수입니다.", () => {
    expect(isArrowFunction(concatStrings)).toBeTruthy();
    expect(() => new concatStrings()).toThrow();
  });

  test("concatStrings는 문자열 3개를 이어붙인 값을 리턴합니다.", () => {
    expect(concatStrings("hello", "world", "javascript")).toBe("helloworldjavascript");
  });
}
