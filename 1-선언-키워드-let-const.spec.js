import { expect, test } from "vitest";
import {
  declarationLet as studentLet,
  declarationConst as studentConst,
} from "./선언-키워드-let-const";
import {
  declarationLet as referenceLet,
  declarationConst as referenceConst,
} from "./선언-키워드-let-const.reference";

if (process.env.NODE_ENV === "student") {
  test("declarationLet", () => {
    expect(studentConst()).toBe("머리부터 발끝까지 핫 이슈");
  });

  test("declarationConst", () => {
    expect(studentLet()).toBe("머리부터 발끝까지 핫 이슈");
  });
}

if (process.env.NODE_ENV === "student") {
  test("declarationLet", () => {
    expect(referenceLet()).toBe("머리부터 발끝까지 핫 이슈");
  });

  test("declarationConst", () => {
    expect(referenceConst()).toBe("머리부터 발끝까지 핫 이슈");
  });
}
