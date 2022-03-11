import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "./Navbar";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "./ModalBody";
import Body from "../Body/index";
import { Route } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    Name: Yup.string().required(),
    Billing: Yup.string().required(),
    Delivery: Yup.string().required(),
    Telephone: Yup.number().required(),
    Date: Yup.date().required(),
  });
  const formik = useFormik({
    initialValues: {
      Name: "",
      Billing: "",
      Delivery: "",
      Telephone: "",
      Date: "",
    },

    onSubmit: (values, resetForm) => {
      // formik.resetForm();
      console.log(values, "values");
      navigate("/");
    },
    validationSchema,
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 order-1 order-md-0">
            <div className="modalBodyForm">
              <ModalBody />
            </div>
          </div>
          <div className="col-lg-6 col-12 order-0 order-md-1">
            <div className="Checkout" style={{ padding: "10px" }}>
              <div className="container">
                <form onSubmit={formik.handleSubmit}>
                  <div className="headerFormPage bg-primary text-white">
                    <h4 className=" ">Checkout Page</h4>
                  </div>
                  <div className="mt-4">
                    <label for="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="Name"
                      onChange={formik.handleChange}
                      value={formik.values.Name}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.Name && formik.touched.Name ? (
                      <span className="text-danger">{formik.errors.Name}</span>
                    ) : null}
                  </div>
                  <div className="mt-4">
                    <label for="billing" className="form-label">
                      Billing Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="billing"
                      name="Billing"
                      onChange={formik.handleChange}
                      value={formik.values.Billing}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.Billing && formik.touched.Billing ? (
                      <span className="text-danger">
                        {formik.errors.Billing}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-4">
                    <label for="delivery" className="form-label">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="delivery"
                      name="Delivery"
                      onChange={formik.handleChange}
                      value={formik.values.Delivery}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.Delivery && formik.touched.Delivery ? (
                      <span className="text-danger">
                        {formik.errors.Delivery}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-4">
                    <label for="telephone" className="form-label">
                      Telephone Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="telephone"
                      name="Telephone"
                      onChange={formik.handleChange}
                      value={formik.values.Telephone}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.Telephone && formik.touched.Telephone ? (
                      <span className="text-danger">
                        {formik.errors.Telephone}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-4">
                    <label for="date" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="Date"
                      onChange={formik.handleChange}
                      value={formik.values.Date}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.Date && formik.touched.Date ? (
                      <span className="text-danger">{formik.errors.Date}</span>
                    ) : null}
                  </div>

                  <button
                    type="submit"
                    variant="success"
                    className="btn btn-primary mt-3"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
