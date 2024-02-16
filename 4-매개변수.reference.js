const countries = [
  {
    name: "대한민국",
    code: "KR",
    capital: {
      name: "서울",
      population: 9776000,
    },
  },
  {
    name: "미국",
    code: "US",
    capital: {
      name: "워싱턴 D.C.",
      population: 705749,
    },
  },
  {
    name: "일본",
    code: "JP",
    capital: {
      name: "도쿄",
      population: 13929286,
    },
  },
  {
    name: "프랑스",
    code: "FR",
    capital: {
      name: "파리",
      population: 2161000,
    },
  },
  {
    name: "호주",
    code: "AU",
    capital: {
      name: "캔버라",
      population: 426704,
    },
  },
];

export function getiPhone(series = "15 Pro") {
  return "iPhone " + series;
}

export function addAsMuchAsYouWant(...rest) {
  return rest.reduce((a, b) => a + b, 0);
}

export function addNewCapitalInfo(country, newCapital) {
  return {
    ...country,
    capital: {
      ...country.capital,
      ...newCapital,
    },
  };
}
