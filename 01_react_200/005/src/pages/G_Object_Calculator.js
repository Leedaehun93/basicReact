// TODO : 자식 컴포넌트 연습 G_Object_Calculator.js

// TODO : 연습문제
// 변수를 정의하고, input 태그에 데이터 바인딩과
// handleChange() 함수를 정의하세요.
// 공식은 아래 제시된 것을 사용하세요.
// /* (섭씨온도 * 1.8) + 32 = 화씨온도 */
// /* (화씨온도 - 32) / 1.8 = 섭씨온도 */
// 결과: <p>화씨온도 : {화씨온도} </p>
//       <p>섭씨온도 : {섭씨온도} </p>

// TODO : 리액트 기본 컴포넌트 템플릿 단축키 : rfce
// TODO : import 함수 제대로 에러 확인 필수
import React, { useState } from "react";

function G_Object_Calculator() {
  // TODO: 객체 정의
  let initialTemp = {
    cTemp: 0,
    fTemp: 0,
  };

  // TODO: 변수 정의
  // 정방향 바인딩 변수 정의
  // 사용법 : let [변수, set변수] = useState(초기값);
  let [temp, setTemp] = useState(initialTemp);

  // TODO: 함수 정의
  // nfn : 화살표함수 단축키
  // 역방향 바인딩 코딩 : ... 연산자 이용 객체 속성 복사 및 수정
  const handleChange = (event) => {
    // 화면 화면의 값 : event.target.value
    let attrValue = event.target.value;
    // 현재 화면의 태그이름 : event.target.name
    let attrName = event.target.name; // cTemp, fTemp
    // 객체의 속성의 값 수정
    setTemp({ ...temp, [attrName]: attrValue });
  };

  // TODO: HTML 태그
  return (
    <div>
      <fieldset>
        {/* (섭씨온도 * 1.8) + 32 = 화씨온도 */}
        <legend>섭씨온도를 입력해주세요:</legend>
        <input value={temp.cTemp} name="cTemp" onChange={handleChange} />
        <p>화씨온도 : {temp.cTemp * 1.8 + 32} </p>
      </fieldset>

      <fieldset>
        {/* (화씨온도 - 32) / 1.8 = 섭씨온도 */}
        <legend>화씨온도를 입력해주세요:</legend>
        <input value={temp.fTemp} name="fTemp" onChange={handleChange} />
        <p>섭씨온도 : {(temp.fTemp - 32) / 1.8} </p>
      </fieldset>
    </div>
  );
}

export default G_Object_Calculator;
