import React, { useState } from "react";

function AddCustomer() {
  const initailCustomer = {
    cname: "",
    loc: "",
  };

  let [customer, setCustomer] = useState(initailCustomer);

  const handleChange = (event) => {
    let attrValue = event.target.value;
    let attrName = event.target.name;
    setCustomer({ ...customer, [attrName]: attrValue });
  };

  const saveCustomer = () => {
    alert("저장되었습니다.");
  };

  return (
    <div className="submit-form">
      <div>
        <div className="form-group mb-3">
          <label htmlFor="dname">Cname</label>
          <input
            type="text"
            className="form-control"
            id="cname"
            required
            value={customer.cname}
            onChange={handleChange}
            name="cname"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            required
            value={customer.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Phone</label>
          <input
            type="text"
            className="form-control"
            id="Phone"
            required
            value={customer.Phone}
            onChange={handleChange}
            name="Phone"
          />
        </div>

        <button onClick={saveCustomer} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddCustomer;
