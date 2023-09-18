// TODO : 부모 컴포넌트 메인 : App.js
// TODO : 리액트에서 처음으로 실행되는 js(최상위 부모 컴포넌트)
// TODO : 웹브라우저 확인(주소창) : http://localhost:3000

// TODO : App.css import (기본 : 중앙정렬)
import "./App.css";

// TODO : 자식 컴포넌트 가져오기(import)
import A_SignUp from "./pages/A_SignUp";
import B_SignUp_Exam from "./pages/B_SignUp_Exam";
import C_object_Signup from "./pages/C_Object_SignUp";
import D_SpreadOperator from "./pages/D_SpreadOperator";
import E_Object_SignUp_Exam from "./pages/E_Object_SignUp_Exam";
import F_Calculator from "./pages/F_Calculator";
import G_Object_Calculator from "./pages/G_Object_Calculator";
import H_ProfileCard from "./pages/H_ProfileCard";

function App() {
  // TODO : 변수/함수를 정의하는 부분
  // TODO : 화면에 보이는 부분 : return 안에 있는 html 태그 화면에 보임
  return (
    <div className="App">
      {/* TODO: 자식 컴포넌트 추가 */}
      {/* <A_SignUp /> */}
      {/* <B_SignUp_Exam /> */}
      {/* <C_object_Signup /> */}
      {/* <D_SpreadOperator /> */}
      {/* <E_Object_SignUp_Exam /> */}
      {/* <F_Calculator /> */}
      {/* <G_Object_Calculator /> */}
      <H_ProfileCard />
    </div>
  );
}

export default App;