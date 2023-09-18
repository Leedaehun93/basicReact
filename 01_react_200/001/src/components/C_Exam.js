// TODO : C_Exam.js : 자식 컴포넌트.js
// TODO : 버튼 클릭으로 문자열 값 바꿔보기

// import 보내기 -> useState
import { useState } from "react";

// TODO : React 기본구조 컴포넌트 생성
// rfce
// TODO : 연습문제
// 클릭시 아래 결과대로 코딩하세요
// 최초화면 : "안녕하세요"
// 결과 : "안녕"

// TODO: 1) 바인딩 변수 정의

function C_Exam() {
  // TODO: 변수 정의 : 여기
  let [element, setElement] = useState("안녕하세요");

  // TODO: 2) myClick() 화살표 함수 : 안녕 으로 수정
  // nfn
  const myClick = () => {
    // 수정 함수 : "안녕"
    setElement("안녕");
  };

  return (
    <div>
      {element}
      <br />
      <button onClick={myClick}>문자열변경</button>
    </div>
  );
}

export default C_Exam;