// 구조분해할당 (destructuring assignment)
// 배열과 객체를 "분해"하여 요소나 속성을 변수에 할당한다.

// 배열
// ES5
const helloWorld = ["hello", "world"];
const helloWorldString = helloWorld[0] + " " + helloWorld[1];

// ES6
const [hello, world] = helloWorld;
const helloWorldByDestructuring = hello + " " + world;

const ozCodingSchool = ["oz", "coding", "school"];
const [oz] = ozCodingSchool;

// 배열의 구조 분해 할당은 순서만 맞으면 변수 이름은 상관없다.
const [OZ, coding, school] = ozCodingSchool;
const [first, second, third] = ozCodingSchool;

// React에서 자주 보게 될 것
// const [count, setCount] = useState(0)

// spread syntax와 같이 사용 할 수 있다.
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [num1, num2, ...rest] = numbers;
console.log(rest); // [3, 4, 5, 6, 7]
console.log(Array.isArray(rest)); // true

// 객체
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

// 배열 구조 분해 할당 복습
const [apple, banana, cherry, strawberry, grape] = fruits;

// ES5
const ES5appleColor = apple.color;
const ES5applePrice = apple.price;

// ES6
// 객체의 구조 분해 할당은 속성의 key와 분해 할당한 변수의 이름이 같아야 합니다.
const { color, price } = apple;

// 객체 구조가 중첩 구조라면, 구조 분해 할당도 중첩으로 할 수 있습니다. (nested)
const {
  origin: { country },
} = apple;

const newFruit = {
  color,
  price,
};

// 매개변수
// 매개변수가 배열, 객체일 때도 구조 분해 할당이 가능합니다.
const getFruitNameColor = ({ name, color }) => "과일 이름: " + name + " " + "색깔" + color;
const grapeNameColor = getFruitNameColor(grape); // '과일 이름: 포도 색깔: 보라'

const getFullName = ([firstName, LastName]) => firstName + " " + LastName;
const fullName = getFullName(["Harry", "Potter"]); // Harry Potter

// 역시 React에서 자주 보게 된다
// function NewComponent ({ color, price }) {
//   return <div>
//     <span>{color}</span>
//     <span>{price}</span>
//   </div>
// }
