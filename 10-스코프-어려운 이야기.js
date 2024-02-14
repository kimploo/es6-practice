// --- 어려운 이야기 ---

// 👩‍🎓: .. 쌤 제가 블록 스코프, 함수 스코프라는 것에 대해서 들어봤는데요 ..
// 👩‍🏫: 음 몰라도 개발하는데 큰 문제는 없지만..

// let, const로 선언한 변수는 블록 단위로 스코프가 결정된다. -> let, cosnt는 블록 스코프를 가진다.
// 간단하게, 중괄호 사이를 블록으로 생각하면 됩니다.
export function blockScopeExample() {
  let valuesLet = [];

  for (let i = 0; i < 3; i++) {
    valuesLet[i] = function () {
      return i;
    };
  }

  console.log(i);
  console.log(valuesLet[0]());
  console.log(valuesLet[1]());
  console.log(valuesLet[2]());
}
// let으로 선언한 i는 for문 밖에서 접근할 수 있을까요?
// var i; 이 코드를 추가하면 어떨까요?

// var로 선언한 변수는 함수 단위로 스코프가 결정된다. -> var는 함수 스코프를 가진다.
export function functionScopeExample() {
  var valuesVar = [];

  for (var j = 0; j < 3; j++) {
    valuesVar[j] = function () {
      return j;
    };
  }

  console.log(j);
  console.log(valuesVar[0]());
  console.log(valuesVar[1]());
  console.log(valuesVar[2]());
}
// var로 선언한 j는 for문 밖에서 접근할 수 있을까요?

// 해결방법...
export function functionScopeExampleIIFE() {
  var valuesVar = [];

  for (var j = 0; j < 3; j++) {
    valuesVar[j] = (function (currentIndex) {
      return function () {
        return currentIndex;
      };
    })(j);
  }

  console.log(j);
  console.log(valuesVar[0]());
  console.log(valuesVar[1]());
  console.log(valuesVar[2]());
}

/**
 * 제 경험 + 리서치를 통한 저만의 휴리스틱
 *
 * - 제발 var는 쓰지 마세요 ..
 * - var의 함수 스코프의 문제를 해결하기 위해서 IIFE를 쓰면 된다. 정도로 알고 계시고 .. (가끔 물어보는 사람도 있답니다 ..)
 * 이 해결책을 알 필요가 없기를 빕니다.. 에러가 나지 않는 에러는 정말 찾기 어렵기 때문에 ..
 *
 */

// --- 더 어려운 이야기 ---

// 👩‍🎓: .. 쌤 제가 클로저라는 것에 대해서 들어봤는데요 ..
// 👩‍🏫: 흠, 클로저도 스코프만 알고 있으면 어렵지 않아요.

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
