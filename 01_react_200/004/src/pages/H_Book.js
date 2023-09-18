// TODO : 자식 컴포넌트 연습 H_Book.js

// TODO : 반복문 완성하기(ul-li(반복)), 부트스트랩, 화면에 name 출력하세요
// TODO : 사용법 : 배열변수.map((value, index)=>{return (태그))})

// TODO : 리액트 기본 컴포넌트 템플릿 단축키 : rfce
// TODO : import 함수 제대로 에러 확인 필수
import React from "react";

function H_Book() {
  // TODO : 변수 정의

  const students = [
    {
      id: 1,
      name: "Inje",
    },
    {
      id: 2,
      name: "Steve",
    },
    {
      id: 3,
      name: "Bill",
    },
    {
      id: 4,
      name: "Jeff",
    },
  ];

  // TODO : 함수 정의
  // nfn

  {
    /* 부트스트랩에서 코드 복사함 */
  }
  return (
    <div>
      <ul class="list-group">
        {/* map() 특징 : 배열의 개수(길이)만큼 자동 반복됨(0 ~ 3 : 인덱스번호도 자동증가) */}
        {/* 반복문 : 여기서 돌리면 됨 : students.map((student, index)=>{return (<li>{student.속성}</li>)})  */}
        {/* 반복문 : 여기서 돌리면 됨 : students.map((student, index)=>(<li>{student.속성}</li>))  */}
        {/* 사용법 : 배열변수.map((value, index(생략), array(생략))=>{반복문;}); */}
        {students.map((student, index) => (
          <li class="list-group-item" key={index}>
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default H_Book;