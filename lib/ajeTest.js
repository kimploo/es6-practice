/**
 * ajeTest
 * 특정 질문과 나이에 따라 다른 메시지를 반환하는 함수입니다.
 *
 * @param {string} question - 사용자가 입력하는 질문. "머리부터 발끝까지" 또는 "여보세요" 중 하나여야 합니다.
 * @param {number} age - 사용자의 나이. 연령대에 따라 반환되는 메시지가 달라집니다.
 * @returns {string} - 주어진 질문과 나이에 따라 결정된 특정 메시지를 반환합니다.
 *                     "머리부터 발끝까지" 질문에 대해 20세 미만은 "오로나민씨", 30세 미만은 "핫 이슈",
 *                     40세 미만은 "다 사랑스러워", 그 이상은 "몰?루"를 반환합니다.
 *                     "여보세요" 질문에 대해 30세 미만은 "밥은 먹었니", 40세 미만은 "거기 잘 지내니",
 *                     50세 미만은 "다 사랑스러워", 그 이상은 "몰?루"를 반환합니다.
 * @throws {string} - 질문이 "여보세요" 또는 "머리부터 발끝까지" 중 하나가 아닐 경우 예외 메시지를 던집니다.
 */
export function ajeTest(question, age) {
  if (question === "머리부터 발끝까지") {
    if (age < 20) {
      return question + " " + "오로나민씨";
    }
    if (age < 30) {
      return question + " " + "핫 이슈";
    }
    if (age < 40) {
      return question + " " + "다 사랑스러워";
    }
    return question + "몰?루";
  }
  if (question === "여보세요") {
    if (age < 30) {
      return question + " " + "밥은 먹었니";
    }
    if (age < 40) {
      return question + " " + "거기 잘 지내니";
    }
    if (age < 50) {
      return question + " " + "다 사랑스러워";
    }
    return question + "몰?루";
  }
  throw '"여보세요" 혹은 "머리부터 발끝까지"를 질문하세요.';
}
