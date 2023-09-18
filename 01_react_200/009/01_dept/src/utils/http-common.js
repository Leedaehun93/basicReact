// TODO : http-common.js
// TODO : 가짜 백엔드에 주소 데이터 접근하는 방법

// 백엔스 기본 url 주소 설정(axios 사용)
// 가짜 백엔드(json-sver) : http://localhost:8000
// 자원(resource) url : /dept
// 사용 예) http://localhost:8000/dept
// 이 파일에서는 기본주소만 설정하고 : http://localhost:8000
// 다른 파일에서 추가 url 설정 : /dept

// 1) 통신 라이브러리 추가 : import
import axios from "axios";

// 2) 기본 주소 설정 : 가짜 백엔드(http://localhost:8000)
export default axios.create({
  baseURL: "http://localhost:8000", // 기본주소
  headers: {
    "Content-Type": "application/json", // 통신에 사용할 문서종류(json)
  },
});