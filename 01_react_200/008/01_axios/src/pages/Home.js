// TODO : 자식 컴포넌트 1페이지 Home.js
//      : 컴포넌트와 메뉴 URL을 연결하는 리액트 라우터(React Router)
// TODO : 통신 라이브러리 설치 후 백엔드 데이터 받아오기

// TODO : React 컴포넌트
// 단축키 : rfce
import React, { useEffect, useState } from "react";
// 통신 라이브러리 설정파일 : http-common.js(프론트 - 백엔드 연결)
import http from "../http-common.js";

function Home() {
  // TODO : 변수정의 (바인딩 변수 : useState())
  let [dept, setDept] = useState([]); // 백엔드 전송받을 객체배열을 담을 변수

  // TODO : 함수 정의
  // TODO: axios 함수를 이용해서 백엔드 데이터를 받아오기 : promise (.then().catch())
  //                                                 http://localhost:8000/dept
  //                                                  추가url : /dept
  // 기본주소 : http://localhost:8000, 추가url : /dept
  // nfn : 화살표 함수 단축키
  const retrieveContent = () => {
    http
      .get("/dept") // TODO: http.get() = 백엔드 데이터 받아오기 함수(요청), 매개변수 입력 : 추가 url
      .then((response) => {
        // TODO: 백엔드 데이터 받기 성공하면 자동 실행됨
        setDept(response.data); // 실제 받은 백엔드 데이터 : 함수명(response.data)
        // 로그 찍기
        console.log(response.data);
      });
    // .catch() 생략가능  //  백엔드 데이터 받기 실패하면 자동 실행
  };

  // TODO: 화면이 뜰 때 retrieveContent() 함수 실행
  // 사용법 : useEffect(함수(), []);
  useEffect(retrieveContent, []);

  return (
    // TODO: 찾기/바꾸기 기능(단축키) : crtl + r
    // TODO: class 함수 입력시 className 코드 사용
    <div className="container">
      <h2 className="mt-3"> AXIOS 테스트 </h2>
      {/* 사용법 : dept.map((value, index)=>(<li>{value.dname}</li>)) */}
      <ul className="list-group">
        {dept.map((value, index) => (
          <li className="list-group-item" key={index}>
            {value.dname}
          </li>
        ))}
        {/* <li class="list-group-item">An item</li> */}
      </ul>
    </div>
  );
}

export default Home;
