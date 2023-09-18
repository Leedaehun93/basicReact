// TODO : 자식 컴포넌트 연습문제 C_Exam.js
// 연습문제
// 데이터 전달받아 아래와 같이 콘솔에 출력되었습니다.
// 화면이 뜰 때 자동 출력되었음 : console.log()
// 결과 : "From App"
//        "useEffect"

// TODO : 리액트 기본 컴포넌트 템플릿 단축키 : rfce
// TODO : import 함수 제대로 에러 확인 필수
import React, { useEffect } from "react";

function C_Exam(props) {
  // TODO   1) 생명주기 생성 함수(컴포넌트 생성) : 화면이 뜰 때 자동 실행
  // TODO : 사용법 : useEffect(()=>{실행문}, []);

  useEffect(() => {
    console.log(props.prop_value); // "From App"
    console.log("useEffect"); // "useEffect"
  }, []);

  return <div>C_Exam</div>;
}

export default C_Exam;
