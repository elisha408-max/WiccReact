import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./Body";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import store from "./redux/reducers/store";
import { Provider } from "react-redux";
import Form from "../src/Components/Form";
import Product from "./Components/Product";

function App() {
  const [count, setCount] = useState([]);
  const [cartValue, setCartValue] = useState([]);
  const [total1, setTotal1] = useState(0);

  // const counter = useSelector((state)=> state.counter.count)

  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(fetchProduct())
  // },[])
  // console.log(props ,'props')

  return (
    <div className="App">
      <Navbar
        count={count}
        setCount={setCount}
        cartValue={cartValue}
        setCartValue={setCartValue}
        total1={total1}
        setTotal1={setTotal1}
      ></Navbar>

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Body
              count={count}
              setCount={setCount}
              cartValue={cartValue}
              setCartValue={setCartValue}
              total1={total1}
              setTotal1={setTotal1}
            />
          }
        />
        <Route exact path="/checkout" element={<Form />} />
        <Route exact path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
