// TODO : 부모 컴포넌트 메인 : App.js
// TODO : 리액트에서 처음으로 실행되는 js(최상위 부모 컴포넌트)
// TODO : 웹브라우저 확인(주소창) : http://localhost:3000

// TODO : App.css import (기본 : 중앙정렬)
import "./App.css";

// TODO : 자식 컴포넌트 가져오기(import)
import A_Comment from "./pages/A_Comment";
import B_Comment_Exam from "./pages/B_Comment_Exam";
import C_Comment_Exam2 from "./pages/C_Comment_Exam2";
import D_CommentList from "./pages/D_CommentList";
import E_CommentList_Exam from "./pages/E_CommentList_Exam";
import F_CommentList_Exam2 from "./pages/F_CommentList_Exam2";

function App() {
  return (
    <div className="App">
      {/* <A_Comment /> */}
      {/* <B_Comment_Exam /> */}
      {/* <C_Comment_Exam2 /> */}
      {/* <D_CommentList /> */}
      {/* <E_CommentList_Exam /> */}
      <F_CommentList_Exam2 />
    </div>
  );
}

export default App;