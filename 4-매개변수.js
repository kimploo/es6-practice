// * 매개변수 기본값 (default parameter value)
// 매개변수의 default value. 함수 매개변수에 아무것도 전달되지 않아도 기본값을 사용한다.
const getTheme = (mode = "light") => {
  if (mode === "light") {
    return "#FFFFFF";
  }
  if (mode === "dark") {
    return "#555555";
  }
  throw '"light"과 "dark"만 전달할 수 있습니다.';
};

const passNoParams = getTheme(); // "#FFFFFF"
const passLight = getTheme("light"); // "#FFFFFF"
const passDark = getTheme("dark"); // "#555555"

// * rest parameter
// "여기서부터 나머지(rest)~" 매개변수(parameter)를 쉽게 표현하는 방법

// 매개변수의 수가 2, 3개인 경우는 상관없지만, 매개변수의 갯수가 정해지지 않은 경우 표현할 방법이 없다.
const addTwo = (a, b) => a + b;
const addThree = (a, b, c) => a + b + c;

// rest parameter로 매개변수의 갯수가 많아도 줄여서 쓸 수 있다.
const addSomeNumbers = (...rest) => {
  let num = 0;
  for (let i = 0; i < rest.length; i++) {
    num += rest[i];
  }
  return num;
};
const sum1 = addSomeNumbers(1, 2, 3, 4); // 10
const sum2 = addSomeNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

// 베열 고차함수 메서드를 알게 되면 이렇게도 쓸 수 있음
// const addSomeNumbersReduce = (...rest) => rest.reduce((a, b) => a + b);

// 몇몇 매개변수는 따로 이름을 지어주고, 뒤에 rest parameter를 쓸 수도 있음
const echoAsMuchAsYouWant = (first, second, ...rest) => {
  console.log(0, first);
  console.log(1, second);
  for (let i = 0; i < rest.length; i++) {
    console.log(2 + i, rest[i]);
  }
};

// 첫번째, 두번째 argument 이후 원하는 만큼 무한대로 전달해도 함수에서 조회할 수 있다.
// argument의 갯수가 정해져 있지 않은 경우 자주 사용한다.
echoAsMuchAsYouWant("hello", "world", "oz", "coding", "school");

// 참고: ES5 문법
function echoAsMuchAsYouWantES5() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(i, arguments[i]);
  }
}

// * spread syntax (operator)
// 배열에 있는 요소를 펼쳐서(spread) 전달하는 방법
const names = ["John", "Smith", "Linus", "Torvalds"];
const echoFourNames = (name1, name2, name3, name4) => console.log(name1, name2, name3, name4);

echoFourNames(names[0], names[1], names[2], names[3]); // John Smith Linus Torvalds
echoFourNames(...names); // John Smith Linus Torvalds

// 새로운 배열을 만들 때도 가능하다.
const newNames = [...names];
const newNamesButNewJeans = ["Dani", "Hani", ...names];

// 객체의 속성도 같은 원리로 전달할 수 있다.
const fruits = [
  {
    name: "사과",
    color: "빨강",
    price: 5000,
    origin: {
      country: "한국",
      region: "경북",
      note: "달콤하고 아삭아삭한 맛",
    },
  },
  {
    name: "바나나",
    color: "노랑",
    price: 3000,
    origin: {
      country: "필리핀",
      region: "다바오",
      note: "부드럽고 달콤한 맛",
    },
  },
  {
    name: "체리",
    color: "빨강",
    price: 12000,
    origin: {
      country: "미국",
      region: "워싱턴",
      note: "신선하고 즙이 많음",
    },
  },
  {
    name: "딸기",
    color: "빨강",
    price: 9000,
    origin: {
      country: "한국",
      region: "경기",
      note: "달콤하고 향이 강함",
    },
  },
  {
    name: "포도",
    color: "보라",
    price: 4000,
    origin: {
      country: "프랑스",
      region: "보르도",
      note: "풍부한 향과 새콤달콤한 맛",
    },
  },
];

const washingtonApple = {
  country: "미국",
  region: "워싱턴",
  note: "사과는 우리나라 사과가 제일 맛있음 ... ",
};

const apple = fruits[0];

// ES5
const ES5AmericanApple = {
  name: apple.name,
  color: apple.color,
  price: 3000,
  origin: washingtonApple,
};

// ES6
const ES6AmericanApple = {
  ...apple,
  price: 3000,
  origin: {
    ...washingtonApple,
  },
};

// 구조분해 할당은 순서에 따라서 결과가 달라진다.
const newPriceAddedApple = {
  ...apple,
  price: 3000,
};
console.log(newPriceAddedApple.price); // 3000

const newPriceOmittedApple = {
  price: 3000,
  ...apple,
};
console.log(newPriceOmittedApple.price); // 5000

/**
 * TL;DR
 * default parameter(기본값 매개변수): 함수에 전달하는 인수가 없어도 지정되는 기본 매개변수
 * rest parameter(나머지 매개변수): 매개변수 몇 개의 이름을 지정하고, 나머지 매개변수를 모두 표현할 수 있다.
 *   매개변수의 개수가 매우 많거나, 알 수 없을 때 유용하다.
 * spread syntax: rest parameter는 여러개를 하나의 배열로 모아주는 것이라면, spread syntax는 하나의 배열/객체로 모여있는 것을 펼처(spread) 주는 것
 *   명칭의 차이는 있으나, 사실 그냥 다 `...`일 뿐 .. 쓰다보면 익숙해진다. 1주일만 계속 써보면 익숙해질 것
 * spread syntax의 순서에 따라서 결과가 많이 달라지니 주의할 것!
 *
 */

/**
 * `npm run test:student`를 입력하고, 테스트를 모두 통과하세요
 *
 *
 *
 */
const countries = Object.freeze([
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
]);

/**
 * getiPhone
 * 지정된 시리즈에 기반한 iPhone 모델의 이름을 반환합니다.
 * 시리즈가 지정되지 않은 경우 기본값으로 "15 Pro"를 사용합니다.
 *
 * @param {string} 반환할 iPhone 시리즈.
 * @returns {string} iPhone 모델을 나타내는 문자열을 반환합니다. ex) "iPhone 15 Pro", "iPhone 4S"
 *
 */
export function getiPhone(series = "15 Pro") {
  return "iPhone " + series;
}

/**
 * addAsMuchAsYouWant
 * 주어진 모든 인자들의 합을 계산하여 반환합니다.
 * 인자의 개수에 제한이 없으며, 하나도 주어지지 않은 경우 0을 반환합니다.
 *
 * @param {...number} rest - 더할 숫자들. 개수에 제한이 없습니다.
 * @returns {number} 주어진 숫자들의 합계를 반환합니다.
 */
export function addAsMuchAsYouWant(...rest) {
  // TODO
}

/**
 * addNewCapitalInfo
 * 주어진 나라 객체에 새로운 수도 정보를 추가하거나 기존의 수도 정보를 업데이트합니다.
 * 이 함수는 나라 객체와 새로운 수도 정보 객체를 매개변수로 받아, 업데이트된 나라 객체를 반환합니다.
 * 새로운 수도 정보 객체는 기존 수도 정보를 덮어쓸 수 있습니다.
 *
 * @param {Object} country - 나라 정보를 담고 있는 객체. 이 객체는 최소한 `name`과 `code` 프로퍼티를 가져야 합니다.
 * @param {Object} newCapital - 새로운 수도 정보를 담고 있는 객체. 이 객체는 `name`과 `population` 프로퍼티를 포함할 수 있습니다.
 * @returns {Object} 업데이트된 나라 객체를 반환합니다. 이 객체는 새로운 수도 정보가 반영된 `capital` 프로퍼티를 포함합니다.
 */
export function addNewCapitalInfo(country, newCapital) {
  // TODO
}
