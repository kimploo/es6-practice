// 스코프: 변수에 접근할 수 있는 범위, 변수의 유효범위
const language = "JavaScript";
if (true) {
  console.log(language); // JavaScript
  const book = "Clean Code";
}
console.log(book); // Uncaught ReferenceError: book is not defined
// 참조에러 -> 변수가 어디있는지 찾을 수 없다. -> 변수에 접근할 수 없다.

// 스코프 === 블라인드 창문
// 안쪽 중괄호에서 바깥쪽 중괄호에 있는 변수에 접근할 수 있다. (안 -> 밖 🙆)
// 바깥쪽 중괄호에서 안쪽 중관호에 있는 변수에 접근할 수 없다. (밖 -> 안 🙅)

// 끝!

// --- 어려운 이야기 ---

// 👩‍🎓: .. 쌤 제가 블록 스코프, 함수 스코프라는 것에 대해서 들어봤는데요 ..
// 👩‍🏫: 음 몰라도 개발하는데 큰 문제는 없지만..

// let, const로 선언한 변수는 블록 단위로 스코프가 결정된다. -> let, cosnt는 블록 스코프를 가진다.
// 간단하게, 중괄호 사이를 블록으로 생각하면 됩니다.
let valuesLet = [];

for (let i = 0; i < 3; i++) {
  valuesLet[i] = function () {
    return i;
  };
}

console.log(i); // 0
console.log(valuesLet[0]()); // 1
console.log(valuesLet[1]()); // 2
console.log(valuesLet[2]()); // 3

// let으로 선언한 i는 for문 밖에서 접근할 수 있을까요?

// var로 선언한 변수는 함수 단위로 스코프가 결정된다. -> var는 함수 스코프를 가진다.
var valuesVar = [];

for (var i = 0; i < 3; i++) {
  valuesVar[i] = function () {
    return i;
  };
}

console.log(i); // 3
console.log(valuesVar[0]()); // 3
console.log(valuesVar[1]()); // 3
console.log(valuesVar[2]()); // 3

// var로 선언한 i는 for문 밖에서 접근할 수 있을까요?

// --- 더 어려운 이야기 ---

// 👩‍🎓: .. 쌤 제가 클로저라는 것에 대해서 들어봤는데요 ..
// 👩‍🏫: 흠, 클로저도 스코프만 알고 있으면 어렵지 않아.

// 클로저 패턴
// 함수 내에서 함수를 리턴하는 개발 방식.
function addIngredient(ingredient) {
  const cookFn = function (method) {
    // 안쪽 스코프에서 (매개)변수 ingredient에 접근 가능하다.
    return ingredient + method;
  };
  return cookFn;
}

const cookWithKimchi = addIngredient("김치");
const newFood = cookWithKimchi("볶음밥"); // '김치볶음밥'

// 위 방식대로 개발을 하면, 클로저에 대해서 자세히 알지 못해도 크게 개발하는데 문제는 없다.
