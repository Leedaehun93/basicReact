// TODO : ./services/customer/EmpService.js
// TODO : axios 공통 함수가 정의된 파일 만들기

// TODO : axios 기본 주소 정의 파일 import : http-common.js(확장자 생략가능)
import http from "../utils/http-common";

// TODO: 함수 정의
// TODO : 조회 : axios.get() 함수 사용
const getAll = () => {
  return http.get("/customer");
};

// TODO : 검색어 조회 함수 : /customer?cname=검색어
const findByCname = (cname) => {
  return http.get(`/customer?cname=${cname} `);
};

// TODO : 저장 요청 사용법 : axios.post("url", 객체)  함수 사용
const create = (data) => {
  return http.post("/customer", data);
};

//TODO : 상세 조회(1건) 함수 : axios.get(url/부서번호(id)) 함수 사용
const get = (id) => {
  return http.get(`/customer/${id}`);
};

//TODO : 삭제요청 함수(1건) 함수 : axios.delete(`/customer/${id}`);
const remove = (id) => {
  return http.delete(`/customer/${id}`);
};

//TODO : 수정요청 함수(1건) 함수 : axios.put(`/customer/${id}`, 수정될객체);
const update = (id, data) => {
  return http.put(`/customer/${id}`, data);
};

// TODO : import 대상
const EmpService = {
  getAll,
  findByCname,
  create,
  get,
  remove,
  update,
};

export default EmpService;
