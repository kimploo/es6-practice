import { describe, expect, test } from "vitest";
const STUDENT = process.env.MODE === "student";

const countries = [
  {
    name: "영국",
    code: "GB",
    capital: {
      name: "런던",
      population: 8982000,
    },
  },
  {
    name: "독일",
    code: "DE",
    capital: {
      name: "베를린",
      population: 3748148,
    },
  },
  {
    name: "캐나다",
    code: "CA",
    capital: {
      name: "오타와",
      population: 994837,
    },
  },
  {
    name: "브라질",
    code: "BR",
    capital: {
      name: "브라질리아",
      population: 3015268,
    },
  },
  {
    name: "인도",
    code: "IN",
    capital: {
      name: "뉴델리",
      population: 25780396,
    },
  },
];

const { isIndia, populationMoreThan1M, populationMoreThan, getCountriesName, sumCapitalPopulation } = STUDENT ? await import("./6-배열-메서드") : await import("./6-배열-메서드.reference");

describe("import?", () => {
  test("", () => {
    expect(isIndia).toBeInstanceOf(Function);
    expect(populationMoreThan1M).toBeInstanceOf(Function);
    expect(populationMoreThan).toBeInstanceOf(Function);
    expect(getCountriesName).toBeInstanceOf(Function);
    expect(sumCapitalPopulation).toBeInstanceOf(Function);
  });
});
describe("국가 함수들", () => {
  test("isIndia는 인도에 대해 true를 반환해야 함", () => {
    const india = countries.find((country) => country.code === "IN");
    expect(isIndia(india)).toBe(true);
  });

  test("isIndia는 인도가 아닌 국가에 대해 false를 반환해야 함", () => {
    const nonIndia = countries.find((country) => country.code !== "IN");
    expect(isIndia(nonIndia)).toBe(false);
  });

  test("populationMoreThan1M은 인구가 100만 명을 초과하는 수도를 가진 국가에 대해 true를 반환해야 함", () => {
    const result = countries.filter(populationMoreThan1M);
    expect(result.length).toBeGreaterThan(0);
    result.forEach((country) => {
      expect(country.capital.population).toBeGreaterThan(1000000);
    });
  });

  test("populationMoreThan은 동적 인구 기준에 따라 국가를 필터링해야 함", () => {
    const threshold = 5000000;
    const result = countries.filter(populationMoreThan(threshold));
    expect(result.length).toBeGreaterThan(0);
    result.forEach((country) => {
      expect(country.capital.population).toBeGreaterThan(threshold);
    });
  });

  test("getCountriesName은 모든 국가의 이름을 반환해야 함", () => {
    const names = countries.map(getCountriesName);
    expect(names).toEqual(countries.map((country) => country.name));
  });
});
