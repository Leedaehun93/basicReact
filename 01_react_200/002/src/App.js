// TODO : 부모 컴포넌트 메인 : App.js
// TODO : 리액트에서 처음으로 실행되는 js(최상위 부모 컴포넌트)
// TODO : 웹브라우저 확인(주소창) : http://localhost:3000

// TODO : 현재는 이미지 불필요하여 주석 처리
// import logo from "./logo.svg";

// TODO : App.css import (기본 : 중앙정렬)
import "./App.css";

// TODO : 자식 컴포넌트 가져오기(import)
import A_Lifecycle from "./pages/A_Lifecycle";
import B_props from "./pages/B_props";
import C_Exam from "./pages/C_Exam";
import D_Exam2 from "./pages/D_Exam2";
import E_Exam3 from "./pages/E_Exam3";
import F_Clock from "./pages/F_Clock";

function App() {
  // TODO : 변수/함수를 정의하는 부분
  // TODO : 화면에 보이는 부분 : return 안에 있는 html 태그 화면에 보임
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      {/* TODO: 자식 컴포넌트 추가시 중복 부분 주석 처리 */}
      <A_Lifecycle></A_Lifecycle>
      <B_props prop_value="hong gil dong"></B_props>
      TODO : 자식 컴포넌트 추가 축약
      <C_Exam prop_value="From app"/>
      <D_Exam2 />

      <E_Exam3 name="처음 만난 파이썬" numOfpage={300} />
      TODO: 컴포넌트의 재사용의 효율: 값만 바꿔서 효율적인 코딩을 할 수 있음
      <E_Exam3 name="처음 만난 자바" numOfpage={500} />
      <E_Exam3 name="처음 만난 js" numOfpage={200} />

      <F_Clock />
    </div>
  );
}

// TODO : 컴포넌트 내보내기(export)
export default App;