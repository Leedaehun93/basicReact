// TODO : 자식 컴포넌트 ./pages/emp/EmpList.js
// TODO : 연습) 사원 조회 페이지 만들기

// TODO : React 컴포넌트
import React, { useEffect, useState } from "react";
// TODO :import 메뉴 라이브러리
import { Link } from "react-router-dom";

// TODO: import axios 공통 함수 파일
import EmpService from "../../services/EmpService";

// TODO : React 컴포넌트정의
// 단축키 : rfce
function EmpList() {
  // TODO: 변수 정의 : customer , 검색함수(안에 내용물없이 만드세요)
  // TODO: EmpService.js (모든데이터 조회 : /customer)
  // TODO:               (검색어 조회 : `/customer?cname=${cname}`)
  let [customer, setCustomer] = useState([]); // 백엔드 사원 데이터를(객체배열) 받을 변수
  let [searchCname, setSearchCname] = useState(""); // 검색어 변수

  // TODO: 함수 정의
  // nfn : 화살표 단축키
  // 벡엔드 모든 데이터 조회 함수 : TODO: axis 사용
  const retrieveCustomer = () => {
    // axios 함수 : get() 요청 : (js 공통 함수를 만들고 공통함수명으로 호출)
    // .then() : 성공(자동실행)
    // .catch() : 실패(자동실행)
    EmpService.getAll() // 벡엔드 요청
      .then((response) => {
        // 성공 자동실행
        setCustomer(response.data); // 실질적인 벡엔드 데이터 저장(response.data)
        // 로그 찍기
        console.log(response.data);
      })
      .catch((e) => {
        // 실패 자동실행
        // 가짜 백엔드라 현재는 유효검사 불가능
        console.log(e); // 에러메세지 콘솔로 출력
      });
  };

  //  화면이 뜰때 retrieveEmp 실행
  // useEffect(()=>{실행문}, []);
  useEffect(() => {
    retrieveCustomer(); // 함수의 사용
  }, []);

  // TODO: 검색어 조회 함수 : findByCname()
  // nfn : 화살표 단축키
  // axios : get(url) : 공통함수 : EmpService.findByCname(검색어)
  const findByCname = () => {
    EmpService.findByCname(searchCname) // 검색어로 조회 요청
      .then((response) => {
        // 성공하면 자동실행
        setCustomer(response.data); // 벡엔드에서 전달해준 데이터를(response.data) 저장
        // 로그 찍기
        console.log(response.data); // 벡엔드데이터(response.data)
      })
      .catch((e) => {
        // 실패하면 자동실행
        console.log(e); // 에러메세지 출력
      });
  };

  // TODO: 검색어 입력양식 : onChange={함수명}
  // 역바인딩 함수 : 코딩
  // nfn : 화살표 단축키
  const onChangeSearchCname = (event) => {
    setSearchCname(event.target.value); // 역바인딩 코딩
  };

  return (
    // TODO : html 정의
    <div>
      <div className="row">
        {/* 제목 시작 */}
        <div className="col-md-12 mb-5 mt-5">
          <h1>Customer List No Page</h1>
        </div>
        {/* 제목 끝 */}
      </div>

      {/* 검색창 시작 */}
      {/* cname start */}
      <div className="row mb-5 justify-content-center">
        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="col-12 w-50 input-group mb-3">
          {/* 검색어 입력창 시작 */}
          <input
            type="text"
            className="form-control"
            placeholder="Search by cname"
            value={searchCname}
            onChange={onChangeSearchCname}
          />
          {/* 검색어 입력창 끝 */}

          {/* 검색 버튼 시작 */}
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByCname}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* cname end */}
      {/* 검색 버튼 끝 */}
      {/* 검색창 끝 */}

      {/* 테이블 시작 */}
      <div className="col-md-12">
        {/* 테이블 제목 시작 */}
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">Cname</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {/* 테이블 제목 끝 */}
          <tbody>
            {/* TODO: 반복문 시작 */}
            {customer &&
              customer.map((data, index) => (
                /* TODO: 행이 반복됨 */
                <tr key={index}>
                  <td>{data.cname}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>
                    <Link to={"/Emp/" + data.id}>
                      <span className="badge bg-success">Edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* 반복문 끝 */}
      </div>
      {/* 테이블 끝 */}
    </div>
  );
}

export default EmpList;
