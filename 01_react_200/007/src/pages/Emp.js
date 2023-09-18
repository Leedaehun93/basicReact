// TODO : 자식 컴포넌트 4페이지 Emp.js
// TODO : 메뉴 URL 연결된 컴포넌트  부트스트랩 반복문 출력하기

// TODO : 연습문제
// 화면에 부트스트랩 목록 태그를 이용해서 화면에 반복문으로 출력하세요

// TODO : React 컴포넌트
// 단축키 : rfce
import React, { useState } from "react";

function Emp() {
  // TODO : 변수 정의
  // nfn : 화살표함수 단축키
  // TODO: 객체배열 === JSON 데이터(문서)
  const initialEmps = [
    {
      eno: 1,
      ename: "Scott",
    },
    {
      eno: 2,
      ename: "James",
    },
    {
      eno: 3,
      ename: "Kim",
    },
  ];

  // TODO : 함수 정의
  let [emp, setEmp] = useState(initialEmps);

  return (
    <div className="container mt-5">
      {/* TODO: emp.map() 함수 실행 : 목록태그(ul-li(반복) : 부트스트랩) */}
      <h4>emp List</h4>

      <ul class="list-group mt-3">
        {/* TODO: emp.map(()=>(<li>문자열</li>)) */}
        {emp.map((value, index) => (
          <li class="list-group-item" key={index}>
            {value.ename}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Emp;