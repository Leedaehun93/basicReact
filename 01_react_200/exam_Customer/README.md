# 기본) node_modules 폴더 : 리액트 설치파일(환경파일들) (1G이상)
# 구글 드라이브 : 설치파일 삭제 후 소스만 업로드함
# 재설치시 아래 명령어 사용
npm i 
( === nmp install)
# 리액트 메뉴추가 : 부트스트랩 사이트 네비게이션 바 예제 이용

# 리액트 라이브러리 추가
npm install 라이브러리이름 

# 리액트 메뉴 라이브러리 추가
npm install react-router-dom

# index.js 파일 : 1) import 추가 
import {BrowserRouter} from "react-router-dom";

# 2) 아래 처럼 새로운 태그를 적용
  <BrowserRouter>
    <App />
  </BrowserRouter>

# App.js : 1) 새로운 태그 import 
import {Routes, Route} from "react-router-dom";
# <Routes><Route /></Routes>
# url 과 컴포넌트가 연결되어 사용가능함 : 라우팅
<Routes>
    <Route path="url" element={<컴포넌트명 />} />
</Routes>

# <a href="url">메뉴</a> 사용