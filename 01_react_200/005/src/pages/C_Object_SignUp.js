// TODO : 자식 컴포넌트 연습 C_Object_SignUp.js
// TODO : 바인딩&역바인딩 함수 사용

// TODO : 리액트 기본 컴포넌트 템플릿 단축키 : rfce
// TODO : import 함수 제대로 에러 확인 필수
import React, { useState } from "react";

function C_Object_SignUp() {
  // TODO: 변수 정의
  // 객체 정의
  let initialCustomer = {
    name: "",
    gender: "남자",
  };

  // 정방향 바인딩 변수
  let [customer, setCustomer] = useState(initialCustomer);

  // TODO: 함수 정의
  // 역방향 바인딩 함수 코딩
  // nfn : 화살표 함수 단축키
  const handleChange = (event) => {
    // 화면의 변경값 = event.target.value
    // 화면에 변경하고 있는 태그 = event.target.name
    // 예) input 변경하고 있음 = input.name = name
    //    select 변경하고 있음 = select.name = gender
    // name === customer.name 속성명 같음
    // gender === customer.gender 속성명 같음
    // TODO : 변경 값을 바꾸기 위해 임시 변수를 지정
    let attrValue = event.target.value; // 화면 변경값
    let attrName = event.target.name; // 화면 태그이름(gender)
    // customer 객체의 속성의 값을 수정
    // TODO: 모던js === 이크마js === ES6 js 스프레드 연산자(...연산자)
    // 예시 setCustomer({...customer, [name] : "홍길동"}) --> name("" 빈문자 값) 홍길동으로 수정 가능
    // 예시 setCustomer({...customer, [gender] : "여자"}) --> gender(남자) 여자로 수정 가능
    //                                [      ]변수를 넣기위해 대괄호 관례
    setCustomer({ ...customer, [attrName]: attrValue });
  };

  //  클릭 이벤트 함수
  // nfn
  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 기능 중지 함수
    alert(`이름 : ${customer.name} 성별 : ${customer.gender}`);
  };
  
  // TODO: HTML 태그
  return (
    <div className="container">
      <form>
        <label>
          이름:
          {/* 데이터 바인딩 : value={name} 
         name = "aaa" -> 화면 "aaa"
      */}
          <input
            type="text"
            value={customer.name}
            name="name"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          성별:
          {/* value : 먼저 선택된값 */}
          <select value={customer.gender} name="gender" onChange={handleChange}>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
        </label>
        {/* 제출(submit) 버튼 */}
        {/* 기본 특징 : 페이지 이동 */}
        <button type="submit" onClick={handleSubmit}>
          제출
        </button>
      </form>
    </div>
  );
}

export default C_Object_SignUp;