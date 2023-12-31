// TODO : 자식 컴포넌트  B_Home2.js
// TODO : 화면에 버튼 클릭으로 값 바꾸기 바인딩 해보기

// TODO : React 기본구조 컴포넌트 생성
// TODO: 화면 바인딩
import React, { useState } from "react";

function B_Home2() {
  // TODO: 변수를 정의하는 곳 : 여기
  // TODO :최초 1번만 정상적으로 화면에 표시
  // TODO : 수정 -> 화면에 수정된 값이 보이지 않음
  let hello = "안녕하세요"; //  일반변수

  // TODO: 바인딩 변수란 : 리액트에서는 화면에서 수정이 일어났을때
  // TODO :               정상적으로 보이게 만들어 주는 변수
  // TODO : 사용법 : let [변수명, 수정함수] = useState("값")
  let [element, setElement] = useState("안녕");

  // TODO : 함수 정의 : 여기
  // nfn
  // TODO: 화면 바인딩 없음 : 수정해서 화면에 나타나지 않음
  const myClick = () => {
    hello = "안녕하세요2";
  };

  // nfn
  // TODO: 화면 바인딩 있음 : 수정하면 화면에 나타남
  const myClick2 = () => {
    // 리액트의 수정함수
    setElement("안녕2");
  };

  // TODO: 웹브라우저 화면에 나오는 부분 : 아래
  return (
    <div>
      {hello}
      <button onClick={myClick}>클릭해보세요</button>
      <br />
      <br />
      {element}
      <button onClick={myClick2}>클릭해보세요2</button>
      <br />
    </div>
  );
}
export default B_Home2;