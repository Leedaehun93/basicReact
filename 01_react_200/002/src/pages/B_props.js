// TODO : 자식 컴포넌트 B_props.js

// TODO : 리액트 기본 컴포넌트 템플릿 단축키 : rfce
// TODO : import 함수 제대로 에러 확인 필수
import React, { useEffect } from "react";
// TODO : 부모 데이터 -> 자식 컴포넌트로 전달 : props
function B_props(props) {
  // TODO   1) 생명주기 생성 함수(컴포넌트 생성) : 화면이 뜰 때 자동 실행
  // TODO : 사용법 : useEffect(()=>{실행문}, []);
  useEffect(() => {
    // props.prop_value : 부모 -> 자식으로 전달된 값
    // 자식 : 매개변수명.변수명
    // 부모 : <컴포넌트명 변수명="전달값" />
    console.log("props 값 : " + props.prop_value);
  }, []);
  return <div>B_props</div>;
}

export default B_props;
