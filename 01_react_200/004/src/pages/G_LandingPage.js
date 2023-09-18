// TODO : 자식 컴포넌트 연습 G_LandingPage.js

// TODO : 삼항 연산자를 이용한 로그인& 로그아웃 토글
// 아래 내용을 확인하고 아래 코딩하세요 부분을 코드 완성하세요
// onClickLogout 함수는 클릭하면
// isLoggedIn 변수의 값을 false -> true 로 변경한다.

// onClickLogin 함수는 클릭하면
// isLoggedIn 변수의 값을 true -> false 로 변경한다.

// TODO : 리액트 기본 컴포넌트 템플릿 단축키 : rfce
// TODO : import 함수 제대로 에러 확인 필수
import React, { useState } from "react";

function G_LandingPage() {
  // TODO : 변수 정의
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // TODO : 함수 정의
  // nfn
  const onClickLogin = () => {
    // TODO 아래 코딩하세요
    // TODO isLoggedIn 변수의 값을 false -> true 로 변경한다.
    setIsLoggedIn(true);
  };
  // nfn
  const onClickLogout = () => {
    // TODO 아래 코딩하세요
    // TODO isLoggedIn 변수의 값을 true -> false 로 변경한다.
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn === true ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
}

export default G_LandingPage;