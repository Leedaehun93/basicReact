// TODO : 자식 컴포넌트 연습 D_SpreadOperator.js

// TODO : 스프레드를 이용한 연산자 다시 연습
// TODO : 리액트 기본 컴포넌트 템플릿 단축키 : rfce
// TODO : import 함수 제대로 에러 확인 필수
import React, { useEffect } from "react";

function D_SpreadOperator() {
  // 화면이 뜰때 자동 실행되는 이벤트 함수 : 생명주기(생성)
  useEffect(() => {
    // ... 연산자 연습
    let num = {
      name: "홍길동",
      email: "hong@daum.net",
    };

    console.log({ name: "장길산" });
    // TODO : num 객체의 name 값 수정
    console.log({ ...num, name: "장길산" }); // { name: "장길산", email:"hong@daum.net"}

    // TODO : 연습문제
    // 원본 객체의 속성은 모두 유지한채 name: "임꺽정" 으로 바꾸세요
    // 결과 : {name:"임꺽정", email:""}
    let num2 = { name: "", email: "" };
    console.log({ ...num2, name: "임꺽정" }); // { name: "임꺽정", email:""}

    // TODO : 예제 2
    let num3 = {
      name: "홍길동",
      email: "hong@daum.net",
    };
    let attrValue = "hong@naver.com";
    // 하드코딩 지양하고 소프트코딩을 해야함(변수를 다루기)
    // 하드코딩 X -> console.log({ ...num3, email: "hong@naver.com" });
    console.log({ ...num3, email: attrValue }); // 소프트코딩 O

    // TODO : 예제 3
    let num4 = {
      name: "홍길동",
      email: "hong@daum.net",
    };
    let attrValue2 = "hong@naver.com"; // 속성값
    let attrName2 = "email"; // 속성명
    // TODO:자바스크립트 규칙) 속성명에 변수를 사용할떄는 : [변수명]
    // TODO:자바스크립트 규칙) 속성값에 변수를 사용할떄는 : 변수명
    console.log({ ...num4, [attrName2]: attrValue2 });

    // TODO : 연습문제 2
    // attrName3 에는 속성명 "phone" 을 넣고,
    // attrValue3 에는 속성값 "010-5678-5678" 들어있습니다.
    // 변수 2개를 활용해서 객체속성을 수정해 보세요
    let num5 = {
      age: 15,
      phone: "010-1234-5678",
    };
    let attrName3 = "phone";
    let attrValue3 = "051-123-4567";
    let attrName4 = "tel";
    console.log({ ...num5, [attrName3]: attrValue3, [attrName4]: attrValue3 });
  }, []);

  return <div>D_SpreadOperator</div>;
}

export default D_SpreadOperator;
