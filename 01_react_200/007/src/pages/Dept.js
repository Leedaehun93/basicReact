// TODO : 자식 컴포넌트 2페이지 Dept.js
// TODO : 메뉴 URL 연결된 컴포넌트 부트스트랩 반복문 출력하기

// TODO : React 컴포넌트
import React, { useState } from "react";

function Dept() {
  // TODO : 변수 정의
  // nfn : 화살표함수 단축키
  // TODO: 객체배열 === JSON 데이터(문서)
  const initaiDept = [
    {
      no: "1",
      dname: "Sales",
    },
    {
      no: "2",
      dname: "Marketing",
    },
    {
      no: "3",
      dname: "Research",
    },
  ];
  // TODO : 함수 정의
  // 바인딩 변수
  // 사용법 : let [변수명, set변수명] = useState(초기값);
  let [dept, setDept] = useState(initaiDept);

  return (
    <div className="container mt-5">
      {/* TODO: dept.map() 함수 실행 : 목록태그(ul-li(반복) : 부트스트랩) */}
      <h4>Dept List</h4>

      <ul class="list-group mt-3">
        {/* TODO: dept.map(()=>(<li>문자열</li>)) */}
        {dept.map((value, index) => (
          <li class="list-group-item" key={index}>
            {value.dname}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dept;