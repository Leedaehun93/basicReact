// TODO : ./services/dept/DeptService.js
// TODO : axios 공통 함수가 정의된 파일

// TODO : axios 기본 주소 정의 파일 import : http-common.js(확장자 생략가능)
import http from "../utils/http-common";

// TODO: 함수 정의
// TODO : 조회 : axios.get() 함수 사용
// TODO : 공통 조회 함수 정의 : /dept
// nfn : 화살표 단축키
const getAll = () => {
  return http.get("/dept");
};

// TODO : 검색어 조회 함수 : /dept?dname=검색어
// 인터넷 주소 : http//url:포트번호/추가url?변수명=값
// nfn : 화살표 단축키
// 웹브라우저 주소창에서 다른 페이지 이동시 변수에 값을 저장해서 전달할 수 있음
// 예) 1번페이지 : /dept        2번페이지 : /dept-detail?변수=값
// nfn : 화살표 단축키
const findByDname = (dname) => {
  return http.get(`/dept?dname=${dname} `);
};

// TODO : 저장 요청 함수 : axios.post("url", 객체)  함수 사용
// 저장 요청 함수(대상 : 화면에 입력된 객체)
// nfn : 화살표 단축키
const create = (data) => {
  return http.post("/dept", data);
};

//TODO : 상세 조회(1건) 함수 : axios.get(url/부서번호(id)) 함수 사용
// nfn : 화살표 단축키
const get = (id) => {
  return http.get(`/dept/${id}`);
};

//TODO : 삭제요청 함수(1건) 함수 : axios.delete(`/dept/${id}`);
// nfn : 화살표 단축키
const remove = (id) => {
  return http.delete(`/dept/${id}`);
};

//TODO : 수정요청 함수(1건) 함수 : axios.put(`/dept/${id}`, 수정될객체);
// nfn : 화살표 단축키
const update = (id, data) => {
  return http.put(`/dept/${id}`, data);
};

// TODO : TODO : import 대상
const DeptService = {
  getAll, // 모든데이터 조회 요청
  findByDname, // 검색어 조회 요청
  create, // 저장 요청
  get, // 상세조회 요청
  remove, // 삭제 요청
  update, // 수정 요청
};

export default DeptService; //  함수 내보내기
