// TODO : 자식 컴포넌트 F_Clock.js

// TODO : 리액트 기본 컴포넌트 템플릿 단축키 : rfce
// TODO : import 함수 제대로 에러 확인 필수

import React from "react";

function F_Clock() {
  return (
    <div>
      <h1>안녕, 리액트</h1>
      <h2>
        현재 시간 :{/* tk : 국가별 현재 시간 출력 */}
        {new Date().toLocaleTimeString()}
      </h2>
    </div>
  );
}

export default F_Clock;
