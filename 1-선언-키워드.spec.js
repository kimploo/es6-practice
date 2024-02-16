import { expect, test } from "vitest";
const STUDENT = process.env.MODE === "student";
const REFERENCE = process.env.MODE === "reference";

if (STUDENT) {
  const { declarationLet, declarationConst } = await import("./1-선언-키워드");
  test("declarationLet", () => {
    expect(declarationLet()).toBe("머리부터 발끝까지 다 사랑스러워");
  });

  test("declarationConst", () => {
    expect(declarationConst()).toBe("머리부터 발끝까지 다 사랑스러워");
  });
}

if (REFERENCE) {
  const { declarationLet, declarationConst } = await import("./1-선언-키워드.reference");
  test("declarationLet", () => {
    expect(declarationLet()).toBe("머리부터 발끝까지 다 사랑스러워");
  });

  test("declarationConst", () => {
    expect(declarationConst()).toBe("머리부터 발끝까지 다 사랑스러워");
  });
}
