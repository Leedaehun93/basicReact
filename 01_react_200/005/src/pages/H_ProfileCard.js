// TODO : 자식 컴포넌트 연습 H_ProfileCard.js
// TODO : 리액트에서 스타일 속성 사용하기

// TODO : 리액트 기본 컴포넌트 템플릿 단축키 : rfce
// TODO : import 함수 제대로 에러 확인 필수
import React, { useState } from "react";

function H_ProfileCard() {
  // TODO: 변수 정의
  let [title, setTitle] = useState("Inge lee");

  // TODO: 함수 정의
  // nfn : 화살표함수 단축키

  // TODO: HTML 태그
  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        backgroundColor: "#4ea04e",
      }}
    >
      {/* 변수이름 title("Inge lee") === true 이면 && 뒤에 태그가 화면에 보임 */}
      {/* 코딩의 관례적 사용 : 변수에 어떤 값이 있으면 무조건 true */}
      {/* false ==> null, [], {}, false의 0 */}
      {title && <h1>{title}</h1>}

      <p>안녕하세요, 소플입니다.</p>
      <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
    </div>
  );
}

export default H_ProfileCard;
