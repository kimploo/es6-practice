import { describe, expect, test } from "vitest";
import { addNewCapitalInfo } from "./4-매개변수.reference";
const STUDENT = process.env.MODE === "student";
const REFERENCE = process.env.MODE === "reference";

const { getiPhone, addAsMuchAsYouWant } = STUDENT ? await import("./4-매개변수") : await import("./4-매개변수.reference");

describe("import?", () => {
  test("", () => {
    expect(getiPhone).toBeInstanceOf(Function);
    expect(addAsMuchAsYouWant).toBeInstanceOf(Function);
  });
});

describe("addAsMuchAsYouWant", () => {
  function generateRandomNumberArray() {
    const length = Math.floor(Math.random() * 50) + 1000;
    const arr = Array.from({ length }, () => Math.random());
    return {
      arr,
      sum: arr.reduce((a, b) => a + b, 0),
    };
  }

  test("인수가 없으면 0을 리턴합니다.", () => {
    expect(addAsMuchAsYouWant()).toBe(0);
  });

  test("하나의 숫자를 올바르게 더함", () => {
    expect(addAsMuchAsYouWant(5)).toBe(5);
  });

  test("두 개의 숫자를 올바르게 더함", () => {
    expect(addAsMuchAsYouWant(1, 2)).toBe(3);
  });

  test("여러 개의 숫자를 올바르게 더함", () => {
    expect(addAsMuchAsYouWant(1, 2, 3, 4)).toBe(10);
    const { arr, sum } = generateRandomNumberArray();
    expect(addAsMuchAsYouWant(...arr)).toBe(sum);
  });

  test("음수를 올바르게 더함", () => {
    expect(addAsMuchAsYouWant(-1, -2)).toBe(-3);
  });

  test("양수와 음수 혼합을 올바르게 더함", () => {
    expect(addAsMuchAsYouWant(-1, 2, -3, 4)).toBe(2);
  });

  test("소수점이 있는 숫자를 올바르게 더함", () => {
    expect(addAsMuchAsYouWant(1.5, 2.5)).toBe(4.0);
  });
});

describe("addNewCapitalInfo", () => {
  test("기존 수도 정보를 새로운 정보로 업데이트", () => {
    const country = {
      name: "대한민국",
      code: "KR",
      capital: {
        name: "서울",
        population: 9776000,
      },
    };
    const newCapital = {
      name: "부산",
      population: 3410000,
    };

    const updatedCountry = addNewCapitalInfo(country, newCapital);

    expect(updatedCountry.capital.name).toBe("부산");
    expect(updatedCountry.capital.population).toBe(3410000);
  });

  test("수도 정보의 일부만 업데이트", () => {
    const country = {
      name: "미국",
      code: "US",
      capital: {
        name: "워싱턴 D.C.",
        population: 705749,
      },
    };
    const newCapital = {
      population: 800000, // 수도 인구만 업데이트
    };

    const updatedCountry = addNewCapitalInfo(country, newCapital);

    // 기존 수도 이름 유지 확인
    expect(updatedCountry.capital.name).toBe("워싱턴 D.C.");
    // 인구 업데이트 확인
    expect(updatedCountry.capital.population).toBe(800000);
  });
});
