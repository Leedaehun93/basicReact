// TODO : 자식 컴포넌트 ./pages/dept/AddDept.js
// TODO : // dept 추가페이지

// TODO : React 컴포넌트
// 단축키 : rfce
import React, { useState } from "react";
import DeptService from "../../services/DeptService";

function AddDept() {
  // TODO: 변수 정의
  // 임시 객체(초기화)
  const ininialDept = {
    id: null, // 부서번호
    dname: "", // 부서명
    loc: "", // 부서위치
  };
  // 바인딩 변수 사용법 : let [변수명, set변수명] = useState(초기값);
  let [dept, setDept] = useState(ininialDept); // 백엔드로 전송할 변수(insert 요청)
  let [submitted, setSubmitted] = useState(false); // 저장버튼 클릭 여부를 가진 변수

  // TODO: 역바인딩 함수 정의
  // 역바인딩 함수 버튼 사용법 : onChange={함수명}
  // nfn : 화살표 단축키 사용 :
  // const onChange함수명 = (event) => { let  }
  // const handleInputChange = (event) => {     let attrValue = event.target.value; // 화면 입력값
  // let attrName = event.target.value; // 화면 태그 이름(===객체의 속성명)}
  //스프레드 연산자로 속성의 값을 수정
  // setDept({...dept, [attrName]:attrValue});

  const handleInputChange = (event) => {
    let attrValue = event.target.value; // 화면 입력값
    let attrName = event.target.name; // 화면 태그 이름(===객체의 속성명)
    //스프레드 연산자로 속성의 값을 수정
    setDept({ ...dept, [attrName]: attrValue });
  };

  // TODO: 저장 함수 정의 : 클릭 함수(onClick={함수명})
  // nfn : 화살표 단축키 사용 :
  // 백엔드로 dept 객체를 저장 요청 (axios : 공통저장함수(caeate()) )
  // const onChange함수명 = (second) => { third }
  const saveDept = () => {
    // 임시 저장용 객체
    let data = {
      dname: dept.dname, // 화면 입력값(부서명)
      loc: dept.loc, // 화면 입력값(부서위치)
    };

    // TODO: 화면전환 함수 정의
    DeptService.create(data) // 저장 요청(부서객체)
      .then((response) => {
        setDept(response.data); // 백엔드에 저장된 객체를 받아서 변수에 저장
        setSubmitted(true); // 저장 버튼 클릭 + 저장성공(자동실행)(false -> true)
        // 로그 찍기
        console.log(response.data);
      })
      .catch((e) => {
        // 실패하면 자동실행
        console.log(e); // 에러 메시지 출력
      });
  };

  // 저장 버튼 클릭 : 새로운 화면 전환(버튼이 1개 있는 화면)
  // 3항 연산자의 다른 화면이 출력(submitted == true)
  // nfn : 화살표 단축키 사용
  const newDept = (newept) => {
    // 역할 : 변수 초기화(객체, setSubmitted = false)
    setDept(ininialDept);
    setSubmitted(false);
  };

  return (
    // TODO : html 정의
    <div className="row">
      {/* 변수(submitted)? 참 : 거짓 */}
      {submitted ? (
        // submitted = true : 저장버튼을 클릭했다는 의미
        // newDept() 함수 실행되면 : 새로운 빈폼을 화면에 보여주고, submitted = false
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newDept}>
            Add
          </button>
        </div>
      ) : (
        // TODO: <></> : 플래그멘테이션(flagmetation)
        // TODO: ex) 중복 태그가 많을 떄 간소화시킬 수 있음
        <>
          {/* 제목 시작 */}
          <div className="row">
            {/* 제목 시작 */}
            <div className="col-md-6 mb-5 mt-5">
              <h1>Add Dept</h1>
            </div>
            {/* 제목 끝 */}
          </div>
          {/* 제목 끝 */}

          {/* 폼(form) 입력양식 시작 */}
          <div className="col-6 mx-auto">
            {/* 부서명(dname) 시작 */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="dname" className="col-form-label">
                  Dname
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="dname"
                  required
                  className="form-control"
                  value={dept.dname}
                  onChange={handleInputChange}
                  placeholder="dname"
                  name="dname"
                />
              </div>
            </div>
            {/* 부서명 끝 */}

            {/* 부서위치(loc) 시작 */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="loc" className="col-form-label">
                  Loc
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="loc"
                  required
                  className="form-control"
                  value={dept.loc}
                  onChange={handleInputChange}
                  placeholder="loc"
                  name="loc"
                />
              </div>
            </div>
            {/* 부서위치 끝 */}

            {/* 저장 버튼 시작 */}
            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveDept}
                className="btn btn-outline-primary ms-2 col"
              >
                Submit
              </button>
            </div>
            {/* 저장 버튼 끝 */}
          </div>
          {/* 폼(form) 입력양식 끝 */}
        </>
      )}
    </div>
  );
}

export default AddDept;
