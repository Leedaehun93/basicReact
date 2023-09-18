// TODO: 부모 컴포넌트 메인 : App.js
// TODO: 리액트에서 처음으로 실행되는 js(최상위 부모 컴포넌트)
// TODO: 웹브라우저 확인(주소창) : http://localhost:3000

// 리액트 주소 : http://localhost:3000
// http://(프로토콜),
// localhost(인터넷주소 예)naver.com ) : 개인pc 인터넷주소
// 3000 : 포트번호(0 ~ 90000) , :80(이것만 생략)
// App.js : 리액트의 1st 페이지(사이트 home 페이지)
// => 리액트 서버가 가동되고 처음으로 실행되는 페이지(js)
// 리액트 페이지(js) : 컴포넌트(==페이지)
// 사용법 :
// function 컴포넌트명() {
// return {
//    <div>내용</div>
// }
// }

// TODO: 현재는 이미지 임포트가 불필요하여 주석 처리 또는 삭제하기
// import logo from "./logo.svg";

// TODO: App.css import (기본 : 중앙정렬)
import "./App.css";

// TODO: 자식 컴포넌트 가져오기(import)
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import B_Home2 from "./components/B_Home2";
import C_Exam from "./components/C_Exam";
import D_ImportComp from "./components/D_ImportComp";

function App() {
  // TODO : 변수/함수를 정의하는 부분
  // TODO : 화면에 보이는 부분 : return 안에 있는 html 태그 화면에 보임
  return (
    <div className="App">
      <div>
        <h1>Start React 200!</h1>
        <p><b>모든 자료형 출력해보기(출력되는 것/안되는 것)</b></p>
        <p><b>웹브라우저 화면에 표시되는 영역</b></p>
        <p><b>===========================================</b></p>
      </div>
      {/* TODO: 자식 컴포넌트 추가 후 중복 부분 주석 처리하기 */}

      {/*  TODO: 머리말 Header.js 자식 컴포넌트 태그 */}
      <Header></Header>

      {/* TODO: 본문 Home.js 자식 컴포넌트 태그 */}
      <Home></Home>

      {/* TODO: 본문 B_Home2.js 자식 컴포넌트 태그 */}
      <B_Home2></B_Home2>

      {/* TODO: 연습문제 C_Exam.js 자식 컴포넌트 태그 */}
      <C_Exam></C_Exam>

      {/* TODO: 본문 B_Home2.js 자식 컴포넌트 태그 */}
      <D_ImportComp></D_ImportComp>

      {/* TODO: 꼬리말 Footer.js 자식 컴포넌트 태그 */}
      <Footer></Footer>
    </div>
  );
}

// TODO: 컴포넌트 내보내기(export)
export default App;