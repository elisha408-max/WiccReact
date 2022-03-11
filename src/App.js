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
import Product from "./Components/ProductDetail";
import ProductDetail from "./Components/ProductDetail";
import Footer from "./Components/Footer";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route exact path="/checkout" element={<Form />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path={`/product/:productId`} element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
