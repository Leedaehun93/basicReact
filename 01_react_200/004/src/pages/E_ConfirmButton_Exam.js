// TODO : 자식 컴포넌트 연습 E_ConfirmButton_Exam.js

// TODO : 연습문제
// 아래 변수에 값이 있다. isFull 이 true 이면
// <p style={{ color: "red" }}>정원이 가득찼습니다.</p>
//   아니면
// <p style={{ color: "blue" }}>입장할 수 있습니다.</p>
//  를 출력하세요.

// TODO : 리액트 기본 컴포넌트 템플릿 단축키 : rfce
// TODO : import 함수 제대로 에러 확인 필수
import React, { useState } from "react";

function E_ConfirmButton_Exam() {
  // TODO : 변수 정의
  let [isFull, setIsFull] = useState(false);

  // TODO : 변수 정의 : 클릭 (isFull:false -> true)
  // nfn
  const HeaderleConfirm = () => {
    // (isFull:false -> true), setter 함수 : setIsFull(변경값)
    setIsFull(true);
  };
  return (
    <div>
      <button onClick={HeaderleConfirm} className="btn btn-warning">
        {
          /* 힌트 */
          isFull === true ? (
            <p style={{ color: "red" }}>정원이 가득찼습니다.</p>
          ) : (
            <p style={{ color: "blue" }}>입장할 수 있습니다.</p>
          )
        }
      </button>
    </div>
  );
}

export default E_ConfirmButton_Exam;