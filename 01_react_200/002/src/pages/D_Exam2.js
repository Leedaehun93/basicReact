// TODO : 자식 컴포넌트 연습문제 D_Exam2.js
// 연습문제
// 아래 생명주기 함수 2개를 만들어서 출력하세요
// 1) 화면이 뜰때 아래의 결과가 콘솔에 출력됨(console.log)
// 결과 : mount call
// 2) tmpState2 라는 변수의 값이(true) 변경되면 콘솔에 출력됨(console.log)
// 버튼을 클릭하면 변수의 값이 변경됨
// 결과 : false

// TODO : 리액트 기본 컴포넌트 템플릿 단축키 : rfce
// TODO : import 함수 제대로 에러 확인 필수
import React, { useEffect, useState } from "react";

function D_Exam2() {
  // TODO 변수 (바인딩)
  // TODO : 사용법 : let [변수명, TODO:set변수명] = useState(초기값)
  // TODO: set변수명이란 : set함수를 말하는건데, 사용시 set변수명을 작성해준다.
  // TODO: set변수명() : 수정함수(setter 함수)
  let [tmpState2, setTmpState2] = useState(true);

  // TODO   1) 생명주기 생성 함수(컴포넌트 생성) : 화면이 뜰 때 자동 실행
  // TODO : 사용법 : useEffect(()=>{실행문}, []);
  useEffect(() => {
    console.log("mount call");
  }, []);

  // TODO 2) 생명주기 생성 -> 수정 함수 : 1) 생성 함수에 변수 값이 바뀔 때 자동 실행
  // TODO : 사용법 : useEffect(()=>{실행문}, [감시할변수명]);

  useEffect(() => {
    console.log(tmpState2); // 변수값 바뀌면 실행
  }, [tmpState2]);

  // TODO : 2-2) 클릭 이벤트 함수 정의
  // 화살표 함수 단축키 : nfn
  const handleClick = () => {
    // 수정함수 : setter 함수 호출 : 값 변경 : true -> false
    setTmpState2(false);
  };

  return (
    <div>
      <h2>[ THIS IS shouldComponentUpdate FUCNTION ]</h2>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export default D_Exam2;
