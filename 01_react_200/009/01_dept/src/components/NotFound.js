// TODO : 공통 컴포넌트 ./components/NotFound.js (불법 접근 또는 url 없는 주소 접근)
// TODO : 불법 접근 또는 url 없는 주소창 주소 접근 설정

// TODO : React 컴포넌트
// 단축키 : rfce
import React from "react";

function NotFound() {
  return (
    <div>
      {/* 접근이 안되는 url를 입력하면 아래 문장이 뜬다. */}
      <h1>웹 페이지 주소를 잘못 입력하셨습니다.</h1>
    </div>
  );
}

export default NotFound;
