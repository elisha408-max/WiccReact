import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image123 from "../img/Logo.png";
import { BsCartPlus } from "react-icons/bs";

import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";
import ModalBody from "./ModalBody";
// import { Form } from "formik";

const Cart = (props) => {
  const { count, setCount, total1, setTotal1 } = props;
  const [show, setShow] = useState(false);

  const [quantity, setQuantity] = React.useState(0);
  const [total, setTotal] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let total123 = 0;
  const dispatch = useDispatch();
  const { cart: cartValue } = useSelector((state) => state.product);

  return (
    <>
      <button
        type="button"
        className="btn position-relative text-white "
        onClick={handleShow}
      >
        <BsCartPlus className="reactIcon" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartValue.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Items Added</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>
          {cartValue.map((item, index) => {
            const subTotal =
              item.price.split("").slice(1).join("") * 120 * item.quantity;
            // setTotal(item.quantity);
            return (
              <div className="row" key={index}>
                <div className="col-6">
                  <div className="row">
                    <div className="col-5">
                      <img
                        src={`https://electronic-ecommerce.herokuapp.com/${item.image}`}
                        alt="ItemsAdded"
                        className="img-fluid"
                        style={{}}
                      />
                    </div>
                    <div className="col-7">
                      <h5>{item.name}</h5>
                      <p className="text-success">Rs.{subTotal}</p>

                      <p className="text-success">Quantity: {item.quantity}</p>
                      <span className="d-none">
                        {(total123 = total123 + subTotal)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <b className="text-success stockStyling">{item.stock}</b>{" "}
                  &nbsp; &nbsp; &nbsp;{" "}
                  <span style={{ fontSize: "20px" }}>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <AiOutlineDelete
                        onClick={() => dispatch(removeFromCart(item.id))}
                      />
                    </button>
                  </span>
                  <br />
                  <div
                    className="btn-group buttonStyling"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button type="button" className="btn btn-outline-success">
                      -
                    </button>
                    <button type="button" className="btn btn-outline-success">
                      {item.quantity}
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => item.quantity + 1}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Modal.Body> */}
        <ModalBody />
      </Modal>
    </>
  );
};

export default Cart;
