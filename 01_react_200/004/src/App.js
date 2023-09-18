// TODO : 부모 컴포넌트 메인 : App.js
// TODO : 리액트에서 처음으로 실행되는 js(최상위 부모 컴포넌트)
// TODO : 웹브라우저 확인(주소창) : http://localhost:3000

// TODO : App.css import (기본 : 중앙정렬)
import "./App.css";

// TODO : 자식 컴포넌트 가져오기(import)
import A_Accommodate from "./pages/A_Accommodate";
import A_Accommodate_Exam from "./pages/A_Accommodate_Exam.js";
import A_Accommodate_Exam2 from "./pages/A_Accommodate_Exam2.js";
import D_ConfirmButton from "./pages/D_ConfirmButton";
import E_ConfirmButton_Exam from "./pages/E_ConfirmButton_Exam";
import F_ConfirmButton_Exam2 from "./pages/F_ConfirmButton_Exam2";
import G_LandingPage from "./pages/G_LandingPage";
import H_Book from "./pages/H_Book";

function App() {
  // TODO : 변수/함수를 정의하는 부분
  // TODO : 화면에 보이는 부분 : return 안에 있는 html 태그 화면에 보임
  return (
    <div className="App">
      {/* TODO: 자식 컴포넌트 추가 */}
      {/* <A_Accommodate /> */}
      {/* <A_Accommodate_Exam /> */}
      {/* <A_Accommodate_Exam2 /> */}
      {/* <D_ConfirmButton /> */}
      {/* <E_ConfirmButton_Exam /> */}
      {/* <F_ConfirmButton_Exam2 /> */}
      {/* <G_LandingPage /> */}
      <H_Book />
    </div>
  );
}

export default App;
