import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { removeFromCart } from "../redux/actions/cart";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
const ModalBody = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const { cart: cartValue } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let total123 = 0;
  return (
    <div>
      <Modal.Body>
        {cartValue.map((item, index) => {
          const subTotal =
            item.price.split("").slice(1).join("") * 120 * item.quantity;
          // setTotal(item.quantity);
          return (
            <div className="row" key={index}>
              <div className="col-md-6 col-12">
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
              <div className="col-md-6 col-12">
                <b className="text-success stockStyling">{item.stock}</b> &nbsp;
                &nbsp; &nbsp;{" "}
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
      </Modal.Body>
      <Modal.Footer>
        <div>
          <p className="fw-bold">{`Total Amount:Rs.  ${total123}`} </p>

          <Button
            disabled={cartValue?.length < 1 ? true : false}
            onClick={() => {
              navigate("/checkout");
            }}
            className="checkout"
            variant="success"
          >
            Checkout
          </Button>
        </div>
      </Modal.Footer>
    </div>
  );
};

export default ModalBody;
