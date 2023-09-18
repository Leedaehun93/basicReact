// TODO : 자식 컴포넌트 5페이지 AddEmp.js
// TODO :

// TODO : React 컴포넌트
// 단축키 : rfce
import React, { useState } from "react";

// TODO : css 파일 가져오기(import)
import "../assets/chapter15.css";

function AddEmp() {
  // TODO : 변수 정의 (바인딩 변수 : useState())
  // 임시 객체 정의
  const initialEmp = {
    ename: "", //  사원명
    Job: "", // 직위
    manager: "", // 관리자 사번
    hiredate: "", // 입사일
    salary: "", // 월급
    commission: "", // 인센티브(보너스, 상여금)
    dno: "", // 부서번호
  };

  // 바인딩 변수
  // 사용법 : let[변수명, set변수명] = useState(초기값);
  let [emp, setEmp] = useState(initialEmp); // input 의 value

  // TODO : 함수 정의
  // onChange : 역바인딩 함수(직접 코딩) : handleChange()
  // nfn : 화살표 함수 단축키
  const handleChange = (event) => {
    // 현재 화면 입력값  : event.target.value
    let attrValue = event.target.value;
    // 현재 화면 태그의 이름 :
    let attrName = event.target.name; // 태그의 이름 === 객체의 속성명
    // 스프레드 연산자로 객체 속성 수정
    setEmp({ ...emp, [attrName]: attrValue });
  };

  // 클릭 이벤트 함수 : saveEmp()
  // nfn : 화살표 단축키
  const saveEmp = () => {
    alert("저장되었습니다.");
  };

  return (
    <div className="submit-form">
      {/* ename 시작 */}
      <div className="form-group">
        <label htmlFor="ename">Ename</label>
        <input
          type="text"
          className="form-control"
          id="ename"
          required
          value={emp.ename}
          onChange={handleChange}
          name="ename"
        />
      </div>
      {/* ename 끝 */}

      {/* Job 시작 */}
      <div className="form-group">
        <label htmlFor="job">Job</label>
        <input
          type="text"
          className="form-control"
          id="job"
          required
          value={emp.job}
          onChange={handleChange}
          name="job"
        />
      </div>
      {/* Job 끝 */}

      {/* manager 시작 */}
      <div className="form-group">
        <label htmlFor="manager">manager</label>
        <input
          //TODO: type required 유효성 검사 숫자로입력됨
          type="number"
          className="form-control"
          id="manager"
          required
          value={emp.manager}
          onChange={handleChange}
          name="manager"
        />
      </div>
      {/* manager 끝 */}

      {/* hiredate 시작 */}
      <div className="form-group">
        <label htmlFor="hiredate">hiredate</label>
        <input
          type="number"
          className="form-control"
          id="hiredate"
          required
          value={emp.hiredate}
          onChange={handleChange}
          name="hiredate"
        />
      </div>
      {/* hiredate 끝 */}

      {/* salary 시작 */}
      <div className="form-group">
        <label htmlFor="salary">salary</label>
        <input
          type="number"
          className="form-control"
          id="salary"
          required
          value={emp.salary}
          onChange={handleChange}
          name="salary"
        />
      </div>
      {/* salary 끝 */}

      {/* commission 시작 */}
      <div className="form-group">
        <label htmlFor="commission">commission</label>
        <input
          type="number"
          className="form-control"
          id="commission"
          required
          value={emp.commission}
          onChange={handleChange}
          name="commission"
        />
      </div>
      {/* commission 끝 */}

      {/* dno 시작 */}
      <div className="form-group">
        <label htmlFor="dno">dno</label>
        <input
          type="number"
          className="form-control"
          id="dno"
          required
          value={emp.dno}
          onChange={handleChange}
          name="dno"
        />
      </div>
      {/* dno 끝 */}

      {/* saveEmp 버튼 시작 */}
      <button onClick={saveEmp} className="btn btn-success mt-3">
        Submit
      </button>
      {/* saveEmp 버튼 끝 */}
    </div>
  );
}

export default AddEmp;
