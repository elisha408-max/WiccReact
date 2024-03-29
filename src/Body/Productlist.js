import React, { useState, useEffect } from "react";
import { CgHello } from "react-icons/cg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../Components/Cart";
import { addToCart } from "../redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import Counter1 from "../Components/Counter1";
import { decrement } from "../redux/actions/counter";
import { increment } from "../redux/actions/counter";
import { Link } from "react-router-dom";

function Productlist(props) {
  // console.log(props, "props");
  const {
    name,
    price,
    stock,
    id,
    image,
    click,
    date,
    setArray1,
    array1,
    Hello,
    item,
  } = props;

  const [array, setArray] = useState([]);
  const imageLink = `https://electronic-ecommerce.herokuapp.com/${image}`;
  const [disable1, setDisable1] = React.useState(false);
  const [disable, setDisable] = React.useState(false);
  let dateObj = new Date(date);
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  let day = dateObj.getDate();
  const result = ` ${day}/${month}/${year}`;
  let amt = price.split("").slice(1).join("") * 120;

  const [quantity, setQuantity] = React.useState(0);

  const dispatch = useDispatch();

  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="card p-1 mt-2">
          <Link to={`/product/${item.id}`}>
            <img
              src={`https://electronic-ecommerce.herokuapp.com/${image}`}
              className="card-img-top img-fluid"
              alt="..."
              style={{
                height: "300px",

                objectFit: "contain",
              }}
            />
          </Link>

          <div className="card-body">
            <div
              className="btn-group buttonStyling"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                  if (quantity > 0) {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                -
              </button>
              <button type="button" className="btn btn-outline-primary">
                {quantity}
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                disabled={quantity >= stock ? true : false}
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </button>
            </div>
            <h5 className="card-title text-start mt-3">{name}</h5>
            <div className="d-flex justify-content-between text-success">
              <p>{`Rs. ${amt}`}</p>
              <p>Stocks Left: {stock}</p>
            </div>
            <p className="card-text text-start fw-bold">
              Released on: {result}
            </p>
            <div className="row">
              <button
                className="btn btn-primary"
                data-index={id}
                onClick={() => {
                  dispatch(addToCart(item, quantity));
                }}
                disabled={quantity < 1}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productlist;
