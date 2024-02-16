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

export const isIndia = (country) => {
  return country.code === "IN";
};

export const india = countries.find(isIndia);

export const populationMoreThan1M = (country) => {
  return country.capital.population > 1000000;
};

export const countriesCapitalMoreThan1M = countries.filter(populationMoreThan1M);

export const populationMoreThan = (num) => {
  return function (country) {
    return country.capital.population > num;
  };
};

export const countriesCapitalMoreThan2M = countries.filter(populationMoreThan(5000000));

export const getCountriesName = (country) => country.name;
export const countriesNames = countries.map(getCountriesName);

export const sumCapitalPopulation = (sum, country) => {
  return sum + country.capital.population;
};

export const capitalsPopulation = countries.reduce(sumCapitalPopulation);
