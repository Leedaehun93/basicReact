// TODO : 부모 컴포넌트 : App.js
// TODO : 컴포넌트와 메뉴 URL을 연결하는 리액트 라우터(React Router)

// TODO : App.css import (기본 : 중앙정렬)
import "./App.css";

// TODO: 메뉴 라이브러리 컴포넌트 가져오기(import)
import { Routes, Route, Link } from "react-router-dom";

// TODO : 자식 컴포넌트 가져오기(import)
import Home from "./pages/Home";
import Dept from "./pages/Dept";
import AddDept from "./pages/AddDept";
import Emp from "./pages/Emp";
import AddEmp from "./pages/AddEmp";

function App() {
  // TODO : 변수/함수를 정의하는 부분
  // TODO : 화면에 보이는 부분 : return 안에 있는 html 태그 화면에 보임
  return (
    <div className="App">
      {/* 메뉴 */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {/* Home 시작 */}
              {/* TODO: 1페이지 Home은 / 사용 관례 */}
              {/* TODO: url 연결 a 태그를 사용 권장 X : <a href="" </a> */}
              <li class="nav-item">
                <a href="/" class="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              {/* Home 끝 */}

              {/* Dept 시작 */}
              {/* TODO: Link to 사용 권장 O */}

              <li class="nav-item">
                <Link to="/dept" class="nav-link">
                  Dept
                </Link>
              </li>
              {/* Dept 끝 */}

              {/* AddDept (/add-dept)시작 */}
              {/* TODO: html ,css 표준 명명법 : 단어-단어 */}

              <li class="nav-item">
                <Link to="/add-dept" class="nav-link">
                  Add Dept
                </Link>
              </li>
              {/* AddDept 끝 */}

              {/* Emp 시작(/emp) */}
              <li class="nav-item">
                <Link to="/emp" class="nav-link">
                  Emp
                </Link>
              </li>
              {/* Emp 끝 */}

              {/* AddEmp 시작(/add-emp) */}
              <li class="nav-item">
                <Link to="/add-emp" class="nav-link">
                  Add Emp
                </Link>
              </li>
              {/* AddEmp 끝 */}
            </ul>
          </div>
        </div>
      </nav>

      {/* 본문 */}
      <div>
        {/* TODO: 컴포넌트와 메뉴 url 연결 : 라우팅(Router) */}
        <Routes>
          {/* TODO: / : 첫화면 url -> <Home /> 화면에 띄워라 */}
          {/* TODO: 1페이지 Home은 / 사용 관례 */}
          <Route path="/" element={<Home />} />
          {/* TODO: /dept : dept url -> <Dept /> 화면에 띄워라 */}
          <Route path="/dept" element={<Dept />} />
          <Route path="/add-dept" element={<AddDept />} />
          <Route path="/emp" element={<Emp />} />
          <Route path="/add-emp" element={<AddEmp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;