// TODO : 부모 컴포넌트 메인 : App.js

// TODO : App.css import (기본 : 중앙정렬)
import "./App.css";

// TODO : 자식 컴포넌트 가져오기(import)
import Home from "./pages/Home";

function App() {
  // TODO : 변수/함수를 정의하는 부분
  // TODO : 화면에 보이는 부분 : return 안에 있는 html 태그 화면에 보임
  return (
    <div className="App">
      {/* TODO: 컴포넌트와 메뉴 url 연결 : 라우팅(Router) */}
      <Home />
    </div>
  );
}

export default App;
