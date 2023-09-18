// TODO : 자식 컴포넌트 연습문제 D_Exam2.js
// 연습문제
// 부모에서 데이터 전송 시 아래 결과와 같이 출력하세요(화면에 출력)
// 출력 : 이 책의 이름은 처음 만난 파이썬 입니다.
//        이 책의 총 300 페이지입니다.

// TODO : 리액트 기본 컴포넌트 템플릿 단축키 : rfce
// TODO : import 함수 제대로 에러 확인 필수
import React from "react";

// 사용법 : props 
//    ${매개변수.변수명}
function E_Exam3(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
      <h2>{`이 책의 총 ${props.numOfpage} 페이지입니다.`}</h2>
    </div>
  );
}

export default E_Exam3;
