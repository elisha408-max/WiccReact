import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/actions/cart";

const ProductDetail = ({}) => {
  const { productId } = useParams();
  const todo = useSelector((state) => state.product.products[productId - 1]);
  console.log(todo, "productDetails");
  let amt = todo.price.split("").slice(1).join("") * 120;
  let dateObj = new Date(todo.createDate);
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  let day = dateObj.getDate();
  const result = ` ${day}/${month}/${year}`;
  const [quantity, setQuantity] = React.useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="row " style={{ marginTop: "100px" }}>
          <div className="col-md-5 col-12">
            <img
              src={`https://electronic-ecommerce.herokuapp.com/${todo.image}`}
              className="card-img-top img-fluid"
              alt="..."
            />
          </div>
          <div className="col-md-7 col-12">
            <div className="ms-5 " style={{ textAlign: "left" }}>
              <h2 className="mt-1">{todo.name}</h2>
              <span className="text-success">{amt}</span>

              <p className="mt-2">Released on: {result}</p>
              <p className="mt-3">
                Stocks left:<span className="text-success"> {todo.stock}</span>
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="mt-4 m-0">
                <div
                  className="btn-group  text-start"
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
                    disabled={quantity >= todo.stock ? true : false}
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    +
                  </button>

                  <button
                    className="btn btn-primary ms-3"
                    data-index={todo.id}
                    onClick={() => {
                      dispatch(addToCart(todo, quantity));
                    }}
                    disabled={quantity < 1}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
