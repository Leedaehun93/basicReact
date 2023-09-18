// TODO : 부모 컴포넌트 메인 : App.js

// TODO : App.css import (기본 : 중앙정렬)
import "./App.css";

// TODO : 메뉴 라이브러리 가져오기(import)
import { Routes, Route } from "react-router-dom";

// TODO : 공통 컴포넌트 가져오기(import)
import Header from "./components/Header";
import NotFound from "./components/NotFound";

// TODO : 페이지 컴포넌트 가져오기(import)
import Home from "./pages/Home";

// TODO : 페이지 컴포넌트 자식 가져오기(부서메뉴)
import DeptList from "./pages/dept/DeptList";
import AddDept from "./pages/dept/AddDept";
import Dept from "./pages/dept/Dept";

// TODO : 연습) 페이지 컴퍼넌트 자식 가져오기(사원메뉴)
import EmpList from "./pages/emp/EmpList";
import AddEmp from "./pages/emp/AddEmp";
import Emp from "./pages/emp/Emp";



function App() {
  return (
    <div className="App">
      {/* TODO : 컴포넌트와 메뉴 url 연결 : 라우팅(Router) */}
      <Header />

      {/* 본문 : 라우팅 설정 */}
      <div className="container mt-3">
        <Routes>
          {/* 1st 페이지 : / */}
          <Route path="/" element={<Home />} />.
          {/*  * : 지정되지 않은 모든 url  */}
          <Route path="*" element={<NotFound />} />
          {/* TODO: 부서메뉴 */}
          <Route path="/dept" element={<DeptList />} />
          <Route path="/add-dept" element={<AddDept />} />
          <Route path="/dept/:id" element={<Dept />} />
          {/* TODO: 연습) 사원메뉴 */}
          <Route path="/emp" element={<EmpList />} />
          <Route path="/add-emp" element={<AddEmp />} />
          <Route path="/emp/:id" element={<Emp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
