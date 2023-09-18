// TODO : 자식 컴포넌트 ./pages/emp/Emp.js
// TODO : Emp 상세조회 페이지(수정/삭제)

// TODO : import 메뉴 라이브러리
import { useParams, useNavigate } from "react-router-dom";

// TODO : import axios 공통 함수 파일
import EmpService from "../../services/EmpService";

// TODO : React 컴포넌트
import React, { useEffect, useState } from "react";

function Emp() {
  // TODO : 변수 정의
  // TODO : 변수명 : customer(객체), message
  // TODO : EmpService.js (공통js 함수 : get(`/customer/${id}`) : )
  const { id } = useParams();
  let navigate = useNavigate();

  // TODO : 임시 객체(초기화)
  const ininialCustomer = {
    id: null,
    cname: "",
    email: "",
    phone: "",
  };

  // TODO : 바인딩 변수
  let [customer, setCustomer] = useState(ininialCustomer);
  let [message, setMessage] = useState("");

  // TODO : 함수 정의

  // TODO : 1건 조회 함수(상세조회 함수) 정의
  const getEmp = (id) => {
    EmpService.get(id)
      .then((response) => {
        setCustomer(response.data);

        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // TODO : 상세조회 함수 실행
  useEffect(() => {
    if (id) {
      getEmp(id);
    }
  }, [id]);

  // TODO : 역바인딩 함수 정의
  const handleInputChange = (event) => {
    let attrValue = event.target.value;
    let attrName = event.target.name;
    setCustomer({ ...customer, [attrName]: attrValue });
  };
  // TODO: 수정함수 정의 : 클릭
  const updateCustomer = () => {
    EmpService.update(customer.id, customer)
      .then((response) => {
        console.log(response.data);
        setMessage("부서 수정이 성공하였습니다.");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // TODO : 삭제함수 정의 : 클릭
  const deleteCustomer = () => {
    EmpService.remove(customer.id)
      .then((response) => {
        console.log(response.data);
        navigate("/emp");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    // TODO : html 정의
    <>
      {/* 제목 start */}
      <div className="row">
        {/* 제목 시작 */}
        <div className="col-md-6 mb-5 mt-5">
          <h1>Emp Detail</h1>
        </div>
        {/* 제목 끝 */}
      </div>
      {/* 제목 end */}

      <>
        {customer ? (
          /* 상세화면 form 시작 */
          <div className="col-6 mx-auto">
            <form>
              {/* 사원명(Cname) 시작 */}
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="cname" className="col-form-label">
                    Cname
                  </label>
                </div>

                <div className="col-9">
                  <input
                    type="text"
                    id="cname"
                    required
                    className="form-control"
                    value={customer.cname}
                    onChange={handleInputChange}
                    placeholder="cname"
                    name="cname"
                  />
                </div>
              </div>
              {/* 사원명 끝 */}

              {/* 사원 이메일(email) 시작 */}
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="email" className="col-form-label">
                    email
                  </label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    id="email"
                    required
                    className="form-control"
                    value={customer.email}
                    onChange={handleInputChange}
                    placeholder="email"
                    name="email"
                  />
                </div>
                {/* 사원 이메일 끝 */}

                {/* 사원 휴대전화번호(phone) 시작 */}
                <div className="row g-3 align-items-center mb-3">
                  <div className="col-3">
                    <label htmlFor="phone" className="col-form-label">
                      phone
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      type="text"
                      id="phone"
                      required
                      className="form-control"
                      value={customer.phone}
                      onChange={handleInputChange}
                      placeholder="phone"
                      name="phone"
                    />
                  </div>
                </div>
              </div>
              {/* 사원 휴대전화번호 끝 */}
            </form>
            {/* 버튼 시작 : 삭제 / 수정 버튼 */}
            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={deleteCustomer}
                className="btn btn-outline-danger ms-3 col"
              >
                Delete
              </button>
              {/* 버튼 끝 : 삭제 / 수정 버튼 */}

              {/* 수정버튼을 클릭해서 성공하면 성공/실패메세지 출력 */}
              <button
                type="submit"
                onClick={updateCustomer}
                className="btn btn-outline-success ms-2 col"
              >
                Update
              </button>
            </div>

            <p>{message}</p>
          </div>
        ) : (
          /* 상세화면 form 끝 */
          /* 에러시 보여줄 화면 시작 */
          <div className="col-6 mx-auto">
            <br />
            <p>Please click on a Customer...</p>
          </div>
          /* 에러시 보여줄 화면 끝 */
        )}
      </>
    </>
  );
}
export default Emp;
