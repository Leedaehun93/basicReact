// TODO : 자식 컴포넌트 연습 F_Calculator.js

// TODO : 연습문제
// 변수를 정의하고, input 태그에 데이터 바인딩과
// handleChange() 함수를 정의하세요.
// 공식은 아래 제시된 것을 사용하세요.
// /* (섭씨온도 * 1.8) + 32 = 화씨온도 */
// /* (화씨온도 - 32) / 1.8 = 섭씨온도 */
// 결과: <p>화씨온도 : {화씨온도} </p>
//       <p>섭씨온도 : {섭씨온도} </p>

// TODO: (힌트) 스프레드 (x) 객체 (x) : 일반 숫자변수 사용
// TODO: (A_SignUp.js 참고)

// TODO : 리액트 기본 컴포넌트 템플릿 단축키 : rfce
// TODO : import 함수 제대로 에러 확인 필수
import React, { useState } from "react";

function F_Calculator() {
  // TODO: 변수 정의
  // TODO: 힌트
  // 바인딩 변수 : cTemp fTemp
  // 사용법 : let [] = useState(초기값)
  let [cTemp, setCtemp] = useState(0);
  let [fTemp, setFtemp] = useState(0);

  // TODO: 함수 정의
  // TODO: 힌트
  // 역방향 바인딩 함수 : handleChangeCtemp, handleChangeFtemp
  // nfn : 화살표함수 단축키
  const handleChangeCtemp = (event) => {
    // 현재 화면값(event,taget,value) -> 변수 값으로 변경
    setCtemp(event.target.value);
  };

  const handleChangeFtemp = (event) => {
    // 현재 화면값(event,taget,value) -> 변수 값으로 변경
    setFtemp(event.target.value);
  };

  return (
    <div>
      <fieldset>
        {/* (섭씨온도 * 1.8) + 32 = 화씨온도 */}
        <legend>섭씨온도를 입력해주세요:</legend>
        <input value={cTemp} onChange={handleChangeCtemp} />
        <p>화씨온도 : {cTemp * 1.8 + 32} </p>
      </fieldset>

      <fieldset>
        {/* (화씨온도 - 32) / 1.8 = 섭씨온도 */}
        <legend>화씨온도를 입력해주세요:</legend>
        <input value={fTemp} onChange={handleChangeFtemp} />
        <p>섭씨온도 : {(fTemp - 32) / 1.8} </p>
      </fieldset>
    </div>
  );
}

export default F_Calculator;
