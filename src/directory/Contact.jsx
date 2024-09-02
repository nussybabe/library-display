import logo from "./../logo.svg";
import "./../App.css";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    telephone: "",
    isEdit: false,
  });

  const [list, setList] = useState([]);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    let item = {
      ...formData,
      id: Number(list.length) + 1,
    };

    setList(list.concat(item));

    setFormData({ name: "", address: "", telephone: "" });
  };

  const handleDelete = (id) => {
    const nList = list.filter((ls) => ls.id !== id);
    setList(nList);
  };

  const handleEdit = (ls) => {
    setFormData({ ...ls, isEdit: true });
  };

  const handleUpdate = () => {
    const nList = list.filter((ls) => ls.id !== formData.id);
    setList(nList.concat(formData));
    setFormData({ name: "", address: "", telephone: "", isEdit: false });
  };

  return (
    <>
      <div className="container">
        <div className="card mt-3">
          <div className="card-body">
            <h5>Add New Contact</h5>
            <div className="border border-primary border-2 p-3">
              <form action="">
                {/* name */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="" className="mb-2 fw-bold">
                        Contact Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                {/* address */}
                <div className="row mt-2">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="" className="mb-2 fw-bold">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                {/* telephone number */}
                <div className="row mt-2">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="" className="mb-2 fw-bold">
                        Telephone Number
                      </label>
                      <input
                        type="text"
                        name="telephone"
                        value={formData.telephone}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                {/* horizontal rule */}
                <hr />
                {/* button */}
                <button
                  type="button"
                  className={
                    formData.isEdit ? "btn btn-success" : "btn btn-primary"
                  }
                  onClick={formData.isEdit ? handleUpdate : handleSave}
                >
                  {formData.isEdit ? "Update Contact" : "Save Contact"}
                </button>
              </form>
            </div>

            <div className="border border-2 mt-5 p-3">
              <h5>Contact List</h5>

              {list.map((ls, index) => (
                <div className="text-wrapper" key={index}>
                  <div>
                    <h5>{ls.name}</h5>
                    <p>
                      {ls.address} &nbsp;
                      <span className="fw-bold text-danger">
                        {ls.telephone}
                      </span>
                    </p>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => handleEdit(ls)}
                    >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(ls.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
