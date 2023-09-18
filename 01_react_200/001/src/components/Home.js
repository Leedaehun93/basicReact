// TODO : 자식 컴포넌트 본문 Home.js
// TODO : 모든 자료형 출력해보기(출력되는 것/안되는 것)

// TODO: React 컴포넌트의 기본 구조 React Functional Component Export 템플릿 불러오기
// TODO: 단축키 : rfce
function Home() {
  // TODO: 변수를 정의하는 곳
  let array = ["a", "b", "c"]; // 배열변수

  // TODO: 리액트 특징 : 변수값 + html 태그를 같이 사용이 가능함(JSX 표현식)
  // let input = "문자열 출력되나요?";
  let input = <b>문자열 출력되나요?</b>; // 일반변수

  
  // TODO: 함수를 정의하는 곳
  // 함수선언식 : funtion 함수명(){}
  // 함수표현식 : let 함수명 = function(){};
  // 화살표함수 : let 함수명 = () => {}
  // 화살표함수 단축키 : nfn
  const firstFunc = () => {
    return " 함수입니다.";
  };

  // TODO: 클릭 이벤트 함수
  const myClick = () => {
    alert("클릭했어요!!!");
  };

  // TODO: html 태그 + JSX 표현식({}) : return 안에 코딩함
  // TODO: 웹브라우저 화면에 표시되는 영역
  return (
    <div>
      {/* 주석 : ctrl + / */}
      {/* TODO: 1) 문자열 출력 */}
      {/* 문자열 출력 : O */}
      {/* 사용법 : {"문자열"} */}
      {"문자열 출력되나요1!!!"}
      <br />
      {/* TODO: 일반 변수명으로 출력 */}
      {input}
      <br />

      {<b>이것도 출력될까요?</b>}
      <br />

      {/* TODO: 2 숫자 출력 : O */}
      {1 * 2 + 3 - 2}
      <br />

      {/* TODO: 3) 문자열 붙이기 : + */}
      {"abc" + "가나다"}
      <br />

      {/* TODO: 4) JSX 표현식 : {<태그>{문자열}</태그>} : O */}
      {<b>{"안녕하세요"}</b>}
      <br />

      {/* TODO: 5) 배열 출력 : {<태그>{문자열}</태그>} : O */}
      {["가", "나", "다"]}
      <br />

      {[1, 2, 3]}
      <br />

      {/* TODO: 6) 변수명(배열)으로 출력 */}
      {array}
      <br />

      {/* TODO: 7) 함수 출력 : {<태그>{문자열}</태그>} : O */}
      {/* 함수의 사용 : 함수명() */}
      {firstFunc()}
      <br />
      {firstFunc() + "함수(firstFunc)와 문자 출력 이것도 될까요?"}
      <br />
      <br />
      {"-------------------------------------------"}
      <br />
      {/* TODO: 8) 3항 연산자 : 조건식(축약형) */}
      {/* 사용법 : (조건식==true)? 참 : 거짓; */}
      {true ? "true" : "false"}
      <br />
      {false ? "true" : "false"}
      <br />
      <br />

      {/* TODO: 9) html 태그 속성의 값으로 {} 넣어보기 */}
      <a href={"http://www.naver.com"}>네이버</a>
      <br />
      <br />

      {/* TODO: 10) 버튼 태그 속성의 값으로 {} 넣어보기 */}
      <button onClick={myClick}>클릭하세요</button>
      <br />
      <br />

      {/* TODO: 11) 자바스크립트 내장함수 */}
      {"console.log 콘솔창에서 출력됨"}
      {console.log("이것도 출력될까요?")}
      <br />
      <br />
      {/* TODO: 12) 오늘 요일(1 ~ 7) : new Date() */}
      {new Date().getDay()}
      <br />
      {new Date().getFullYear() + "년"}
      <br />
      {new Date().getMonth() + 1 + "월"}
      <br />

      {/* -------------------------------------------- */}
      {/* ----------- 화면에 출력 안되는 것 ----------- */}
      {/* -------------------------------------------- */}

      {/* TODO: 1) 참/거짓(bool/boolean) : X */}
      {true}
      {/* 에러 해결책 : 참/거짓 -> 문자열 로 변경해서 출력 */}

      {/* TODO: 2) 객체 출력 : X, 에러 발생 */}
      {/* {{name:"홍길동", email:"hong@naver.com"}} */}
      {/* 에러 해결책 : 객체 -> 문자열 로 변경해서 출력 */}

      {/* TODO: 3) 조건문 : if문 : X */}
      {/* {if(true) {return "true"}} */}
      {/* 에러 해결책 : 조건문 -> 삼항 연산자 사용 */}

      {/* TODO: 4) 반복문 : for문 : X */}
      {/* {for(let i=1;i<2;i++){console.log("aaa")}} */}
      {/* 에러 해결책 : 반복문 -> map() 함수 사용 */}
    </div>
  );
}

// TODO: 컴포넌트 내보내기(export)
export default Home;