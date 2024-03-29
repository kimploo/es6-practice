// Template Literal (백틱 `)
// 문자열과 변수를 이어붙일 때 좀 더 사람이 읽기 편하게 쓸 수 있다.
// TIP: 맥 한글 키보드의 경우 백틱을 입력하는 방법
// https://m-ur-phy.tistory.com/entry/%EB%A7%A5%EB%B6%81-%EB%B0%B1%ED%8B%B1-%EC%9E%85%EB%A0%A5-%EB%B0%A9%EB%B2%95

const lyrics = ["너만 원해", "내가 전해"];
const justString = "Hype boy" + " " + lyrics[0] + " " + "Hype boy" + " " + lyrics[1];
const templateLiteralString = `Hype boy ${lyrics[0]} Hype boy ${lyrics[1]}`;

// for ~ of 문
// 배열의 index를 이용하지 않아도 된다.

// ES5
let ES5Words = "helloWorld";
for (let i = 0; i < ES5Words.length; i++) {
  console.log(`글자: ${ES5Words[i]}`);
}

// ES6
let ES6Words = "helloWorld";
for (const char of ES6Words) {
  console.log(`글자: ${char}`);
}
