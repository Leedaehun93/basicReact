// TODO : 자식 컴포넌트 ./components/D_ImportComp.js
// TODO : 리액트 컴포넌트에 디자인(css) 적용하기

// TODO : React 기본구조 컴포넌트 생성
// rfce
import React from "react";
// TODO: css 파일 import
// TODO : 사용법 : import "css파일경로"
import "../assets/D_ImportComp.css";
// TODO : 1) css 파일 준비해서 import 하면 적용됨
// TODO : 프로젝트가 커질수록 디자인 클래스선택자 들이 중첩될 수 있음
// TODO : 예) A 사람 css : .alpha, B 사람 css : .alpha,
//                 p : 노란색   ,     p : 파란색
// TODO : 2) 공통 디자인 적용 : 태그선택자 등을 자유롭게 코딩
// TODO : 3) 클래스/id 선택자로 디자인 함 : 프로젝트명(dms01-클래스명 ~ dms05-클래스명)

function D_ImportComp() {
  // TODO: 화면에 보이는 부분
  return (
    <div>
      {/* calss="" => calssName="" :리액트에는 class 대신 사용함 */}
      <h2 className="dms01-h2">ImportComp</h2>
    </div>
  );
}

export default D_ImportComp;