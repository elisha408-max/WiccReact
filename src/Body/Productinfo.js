import React from "react";
import Productlist from "./Productlist";
import { AiTwotoneFilter } from "react-icons/ai";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { array } from "yup";
import { ToastContainer, toast } from "react-toastify";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import ScrollToTop from "react-scroll-to-top";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../redux/actions/products";
import { filterItems } from "../redux/actions/Filter";
const validationSchema = () =>
  Yup.object().shape({
    Price: Yup.string().required(),
    Date: Yup.string().required(),
    Category: Yup.string().required(),
  });

const Productinfo = (props) => {
  let [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [api, setApi] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const override = css`
    display: block;
    margin: 50px auto;
    text-align: center;
  `;

  const todo = useSelector((state) => state.product.products);

  const isLoading = useSelector((state) => state.product.isLoading);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  const validationSchema = Yup.object({
    Price: Yup.string().required("Minimum price is required"),
    Price1: Yup.string().required("Maximum price is required"),
    Date: Yup.date().required("Date is required"),
    Category: Yup.string().required("Category is required"),
  });
  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      Price: "",
      Price1: "",
      Date: "",
      Category: "",
    },
    onSubmit: (values) => {
      dispatch(filterItems(values.Price, values.Price1, values.Category));
    },
    validationSchema,
  });

  return (
    <>
      <ScrollToTop
        smooth
        style={{ backgroundColor: "red" }}
        color="white"
        height="20"
        width="20"
      />

      <ToastContainer />
      <div className="productInfo p-4 container ">
        <div className="d-flex justify-content-between mb-3">
          <h4>Products</h4>

          <Button variant="primary" onClick={handleShow}>
            <AiTwotoneFilter /> Filter
          </Button>

          <Offcanvas show={show} onHide={handleClose} className="me-3 ">
            <Offcanvas.Header closeButton className="bg-primary text-white">
              <Offcanvas.Title>Filter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="Form">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="Price">Price</label> <br />
                    <div className="row">
                      <div className="col-6">
                        <input
                          type="number"
                          className="form-control"
                          id="Price"
                          aria-describedby="Price"
                          placeholder="Min"
                          onChange={handleChange}
                          value={values.Price}
                        />

                        {errors?.Price && (
                          <small className="text-danger">{errors.Price}</small>
                        )}
                      </div>

                      <div className="col-6">
                        <input
                          type="number"
                          className="form-control"
                          id="Price1"
                          aria-describedby="Price"
                          placeholder="Max"
                          onChange={handleChange}
                          value={values.Price1}
                        />
                      </div>
                    </div>
                  </div>
                  <br />

                  <div className="mb-3">
                    <label htmlFor="Date" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="Date"
                      aria-describedby="Date"
                      placeholder="dd/mm/yyy"
                      onChange={handleChange}
                      value={values.Date}
                    />
                  </div>

                  <br />

                  <div className="mb-3">
                    <label htmlFor="Category" className="form-label">
                      Category
                    </label>
                    <select
                      id="Category"
                      className="form-select"
                      onChange={handleChange}
                      value={values.Category}
                    >
                      <option>electronic</option>
                      <option>laptop</option>
                      <option>keyboard</option>
                      <option>watch</option>
                      <option>headseat</option>
                      <option>mobile</option>
                    </select>
                  </div>

                  <section className="footer bg-white">
                    <hr />
                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-3"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-success">
                        Apply
                      </button>
                    </div>
                  </section>
                </form>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <div className="row mt-4">
          {isLoading ? (
            <FadeLoader
              size={150}
              loading={loading}
              height={25}
              css={override}
            />
          ) : (
            todo.map((item) => (
              <Productlist
                item={item}
                key={item.id}
                name={item.name}
                price={item.price}
                id={item.id}
                stock={item.stock}
                image={item.image}
                date={item.createDate}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Productinfo;
