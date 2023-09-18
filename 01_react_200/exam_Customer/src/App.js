import "./App.css";
import Home from "./pages/Home";

import { Routes, Route, Link } from "react-router-dom";
import AddCustomer from "./pages/AddCustomer";
import Customer from "./pages/Customer";

function App() {
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
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              {/* Home 끝 */}
              {/* Dept 시작 */}
              <li class="nav-item">
                <Link to="/customer" class="nav-link">
                  Customer
                </Link>
              </li>
              {/* Dept 끝 */}

              {/* AddDept (/add-dept)시작 */}
              {/* html ,css 표준 명명법 : 단어-단어 */}
              <li class="nav-item">
                <Link to="/add-customer" class="nav-link">
                  Add Customer
                </Link>
              </li>
              {/* AddDept 끝 */}
            </ul>
          </div>
        </div>
      </nav>
      {/* 본문 */}
      <div>
        {/* 컴포넌트와 메뉴 url 연결 : 라우팅(Router) */}
        <Routes>
          {/* / : 첫화면 url -> <Home /> 화면에 띄워라 */}
          <Route path="/" element={<Home />} />
          {/* /dept : dept url -> <Dept /> 화면에 띄워라 */}
          {/* 줄복사 : ctrl + d */}
          <Route path="/customer" element={<Customer />} />
          <Route path="/add-customer" element={<AddCustomer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
