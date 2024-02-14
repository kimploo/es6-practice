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
const addTwo = (a, b) => a + b;
const addThree = (a, b, c) => a + b + c;
const addSomeNumbers = (...rest) => {
  let num = 0;
  for (let i = 0; i < rest.length; i++) {
    num += rest[i];
  }
  return num;
};

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
const numbers = ["John", "Smith", ""];
