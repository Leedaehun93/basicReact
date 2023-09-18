import React, { useState } from "react";

function Customer() {
  const initialCustomer = [
    {
      cid: 1,
      cname: "홍길동",
      email: "hong@naver.com",
      phone: "010-1234-5678",
    },
    {
      no: 2,
      cname: "장길산",
      email: "jang@naver.com",
      phone: "010-1234-5678",
    },
    {
      no: 3,
      cname: "임꺽정",
      email: "lim@naver.com",
      phone: "010-1234-5678",
    },
  ];

  let [customer, setCustomer] = useState(initialCustomer);

  return (
    <div className="container mt-5">
      <h4>Customer List</h4>

      <ul class="list-group">
        {customer.map((value, index) => (
          <li class="list-group-item">
            {value.cname} {value.email} {value.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Customer;
