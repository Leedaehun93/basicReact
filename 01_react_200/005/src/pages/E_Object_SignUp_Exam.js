// TODO : 자식 컴포넌트 연습 E_Object_SignUp_Exam.js
// TODO: 스프레드 연산자 이용 객체 속성 복사 및 수정

// TODO : 연습문제
// 객체를 사용하는 형태로 코딩하세요
// useState() 1번만 사용하고 객체 변수 만들고, handleChange 함수만 코딩하기
// (힌트)스프레드 연산자 이용 객체 속성 복사 및 수정

// TODO : 리액트 기본 컴포넌트 템플릿 단축키 : rfce
// TODO : import 함수 제대로 에러 확인 필수
import React, { useState } from "react";

function E_Object_SignUp_Exam() {
  // TODO: 객체 정의
  let initialCustomer = {
    name: "",
    password: "",
    email: "",
    phone: "",
    address: "",
  };
  // TODO: 변수 정의
  // 바인딩 변수 : 사용법 : let [변수명, set변수명] = useState(초기값);
  // 정방향 바인딩 : 변수값 변경 -> 화면 값 변경(자동)
  let [customer, setCustomer] = useState(initialCustomer);

  // TODO: 함수 정의
  // nfn : 화살표함수 단축키
  // 역방향 바인딩 코딩 : ... 연산자 이용 객체 속성 복사 및 수정
  const handleChange = (event) => {
    // 화면 화면의 값 : event.target.value
    let attrValue = event.target.value;
    // 현재 화면의 태그이름 : event.target.name(name ~ phone)
    let attrName = event.target.name;
    // 객체의 속성의 값 수정
    setCustomer({ ...customer, [attrName]: attrValue });
  };

  // TODO: 클릭 이벤트 함수 : 제출버튼
  // nfn
  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 기능 막기 함수
    alert(` 이름 : ${customer.name} 패스워드: ${customer.password} 
        이메일 : ${customer.email} 폰: ${customer.phone} 
        주소: ${customer.address}`);
  };

  return (
    // TODO: 여기
    <div className="container">
      <form>
        {/* 이름 시작 */}
        <label>
          이름:
          <input
            className="form-control"
            type="text"
            value={customer.name}
            name="name"
            onChange={handleChange}
          />
        </label>
        {/* 이름 끝 */}

        <br />
        {/* 패스워드 시작 */}
        <label>
          패스워드:
          <input
            className="form-control"
            type="password"
            value={customer.password}
            name="password"
            onChange={handleChange}
          />
        </label>
        {/* 패스워드 끝 */}

        <br />
        {/* 이메일 시작 */}
        <label>
          email:
          <input
            className="form-control"
            type="email"
            value={customer.email}
            name="email"
            onChange={handleChange}
          />
        </label>
        {/* 이메일 끝 */}

        <br />
        {/* phone 시작 */}
        <label>
          phone:
          <input
            className="form-control"
            type="text"
            value={customer.phone}
            name="phone"
            onChange={handleChange}
          />
        </label>
        {/* phone 끝 */}

        <br />
        {/* 주소 시작 */}
        <label>
          주소:
          <input
            className="form-control"
            type="text"
            value={customer.address}
            name="address"
            onChange={handleChange}
          />
        </label>
        {/* 주소 끝 */}

        {/* 제출 버튼 시작 */}
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          제출
        </button>
        {/* 제출 버튼 끝 */}
      </form>
    </div>
  );
}

export default E_Object_SignUp_Exam;
