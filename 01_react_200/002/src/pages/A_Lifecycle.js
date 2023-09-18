// TODO : 자식 컴포넌트 A_Lifecycle.js

// TODO : 리액트 컴포넌트의 생명주기(라이프사이클) : 생성/수정
// TODO : 리액트 기본 컴포넌트 템플릿 단축키 : rfce
// TODO : import 함수 제대로 에러 확인 필수
import React, { useEffect, useState } from "react";

// 컴포넌트 : 함수 컴포넌트(클래스 컴포넌트(과거))
// es6 : ECMAscript == 모던자바스크립트
function A_Lifecycle() {
  // TODO : 변수 정의 : 바인딩 변수
  // TODO : 사용법 : let [변수명, TODO:set변수명] = useState(초기값)
  // TODO: set변수명이란 : set함수를 말하는건데, 사용시 set변수명을 작성해준다.
  // TODO: set변수명() : 수정함수(setter 함수)
  let [element, setElement] = useState(true);

  // TODO : 함수 정의
  // TODO : 컴포넌트 생성 함수 : 자동 실행(또는 Mount함수라고 불림)

  // TODO   1) 생명주기 생성 함수(컴포넌트 생성) : 화면이 뜰 때 자동 실행
  // TODO : 사용법 : useEffect(()=>{실행문}, []);

  useEffect(() => {
    // 최초 1번만 화면이 뜰 때 실행됨
    console.log("mount Call");
  }, []);

  // TODO 2) 생명주기 생성 -> 수정 함수 : 1) 생성 함수에 변수 값이 바뀔 때 자동 실행
  // TODO : 사용법 : useEffect(()=>{실행문}, [감시할변수명]);

  useEffect(() => {
    // 최초 1번만 화면이 뜰때 실행됨
    console.log("update Call : " + element);
  }, [element]);

  // 화살표 함수 단축키 : nfn
  // 클릭 함수
  const handleClick = () => {
    // element : true -> false (값 수정)
    setElement(false);
  };

  return (
    // 구조 : <div>HTML태그들</div>   (o)
    // 잘못된 구조 : <div>태그1</div><div>태그2</div> (x)
    <div>
      <h2>This is Lifecycle</h2>
      <button onClick={handleClick}>클릭하세요</button>
    </div>
  );
}

export default A_Lifecycle;