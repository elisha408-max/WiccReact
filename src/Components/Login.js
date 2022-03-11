import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate, Navigate } from "react-router-dom";
import * as Yup from "yup";
const Login = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    Email: Yup.string().required(),
    Password: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },

    onSubmit: (values, resetForm) => {
      formik.resetForm();
      // console.log(values, "values");
      navigate("/");
    },
    validationSchema,
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="login">
              <form onSubmit={formik.handleSubmit}>
                <div className="headerFormPage bg-primary text-white">
                  <h4 className=" ">Login Page</h4>
                </div>
                <div className="mt-4">
                  <label
                    for="Email"
                    className="form-label"
                    style={{ marginRight: "600px" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    name="Email"
                    onChange={formik.handleChange}
                    value={formik.values.Email}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.Email && formik.touched.Email ? (
                    <span className="text-danger">{formik.errors.Email}</span>
                  ) : null}
                </div>
                <div className="mt-4">
                  <label
                    for="billing"
                    className="form-label"
                    style={{ marginRight: "600px" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    name="Password"
                    onChange={formik.handleChange}
                    value={formik.values.Password}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.Password && formik.touched.Password ? (
                    <span className="text-danger">
                      {formik.errors.Password}
                    </span>
                  ) : null}
                </div>
                <br />
                <a href="">Forgot password?</a>
                <br />
                <button
                  type="submit"
                  variant="success"
                  className="btn btn-primary mt-3"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
