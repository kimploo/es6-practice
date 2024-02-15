// 함수형 프로그래밍식 배열 메서드
// 다른 곳에 영향을 주지도 않고 받지도 않는 순수 함수로 Side Effect를 최소화할 수 있어 자주 사용한다.
// 한 번 만든 callback 함수를 계속 사용할 수 있는 것도 장점

// .map
// 배열의 각 요소를 다른 요소로 지정(map)한다.
// 다른 요소로 지정하는 규칙은 내가 정한다.

// 예시 1. 형변환
const convertStringToNumber = (string) => Number(string);
const strings = ["1", "2", "3", "4"];
const stringNumbers1 = strings.map((string) => Number(string)); // [1, 2, 3, 4]
const stringNumbers2 = strings.map(convertStringToNumber); // [1, 2, 3, 4]
const stringNumbers3 = strings.map(Number); // [1, 2, 3, 4]

const fruits = [
  {
    name: "사과",
    color: "빨강",
    price: 5000,
  },
  {
    name: "바나나",
    color: "노랑",
    price: 3000,
  },
  {
    name: "체리",
    color: "빨강",
    price: 12000,
  },
  {
    name: "딸기",
    color: "빨강",
    price: 9000,
  },
  {
    name: "포도",
    color: "보라",
    price: 4000,
  },
];

// 예시 2. 속성값 선택
// 과일을 집고, 과일의 가격을 가져온다
const getFruitPrice = (fruit) => fruit.price;

// 과일들을 순회하면서, 과일들의 가격을 가져온다
const fruitPrices1 = fruits.map((fruit) => fruit.price); // [5000, 3000, 12000, 9000, 4000]
const fruitPrices2 = fruits.map(getFruitPrice); // [5000, 3000, 12000, 9000, 4000]

// .filter
// 배열의 각 요소를 분류(filter)한다.
// 다른 요소로 지정하는 규칙은 내가 정한다.

// 예시 1. 분류
const isEven = (num) => num % 2 === 0;
const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers1 = numbers.filter((num) => num % 2 === 0);
const evenNumbers2 = numbers.filter(isEven);

const priceMoreThan5000 = (fruit) => fruit.price > 5000;
const fruitsPriceMoreThan5000 = fruits.filter(priceMoreThan5000); // [{"name":"체리","color":"빨강","price":12000},{"name":"딸기","color":"빨강","price":9000}]

// 예시 2. 삭제 (React에서 자주 볼 수 있음)
const isNotApple = (fruit) => fruit.name !== "사과";
const fruitsOtherThanApple = fruits.filter(isNotApple); // [{"name":"바나나","color":"노랑","price":3000},{"name":"체리","color":"빨강","price":12000},{"name":"딸기","color":"빨강","price":9000},{"name":"포도","color":"보라","price":4000}]

// .find
// 배열에서 규칙에 맞는 요소 하나를 찾는다.
const isApple = (fruit) => fruit.name === "사과";
const apple = fruits.find(isApple); // {name: '사과', color: '빨강', price: 5000}

// .findIndex
// 배열에서 규칙에 맞는 요소 하나의 인덱스를 찾는다.
const appleIndex = fruits.findIndex(isApple); // 0

// 배열 메서드 사용 시 주의할 점

// BAD 🙅
// 메서드가 가진 의미에 맞게 써야 다른 개발자가 읽기 편하다.
// 애써서 혼란스러운 코드 작성은 지양한다.
let badFruitsPriceMoreThan5000 = [];
fruits.map((fruit) => {
  if (fruit.price > 5000) {
    badFruitsPriceMoreThan5000.push(fruit);
  }
});
console.log(badFruitsPriceMoreThan5000); // [{"name":"체리","color":"빨강","price":12000},{"name":"딸기","color":"빨강","price":9000}]

// GOOD 🙆
let goodFruitsPriceMoreThan5000 = fruits.filter((fruit) => fruit.price > 5000); // [{"name":"체리","color":"빨강","price":12000},{"name":"딸기","color":"빨강","price":9000}]
