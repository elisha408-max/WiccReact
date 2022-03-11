import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <section class="footer text-white ">
        <div class="container-fluid px-lg-5">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
              <h4 class=" text-white">
                <span class="underline1 pb-2">Business Hours</span>
              </h4>
              <p class="mt-5 ">Sunday - Friday: 08.00am to 05.00pm</p>
              <p class="mt-lg-3">Saturday: 10.00am to 08.00pm</p>
            </div>
            <div class="col-lg-3  col-md-6  col-12">
              <h4 class=" text-white">
                <span class="underline1 pb-2">Stay Connected</span>
              </h4>
              <div className="mt-4">
                <RiFacebookFill className="me-3" />
                <FaTwitter className="me-3" />
                <BsInstagram />
              </div>
            </div>
            <div class="col-lg-3  col-md-6 col-12">
              <h4 class=" text-white">
                <span class="underline1 pb-2">Our Address</span>
              </h4>
              <div class="row mt-5">
                <div class="col-1">
                  <AiOutlineHome />
                </div>
                <div class="col-9">
                  <span class=" text-white text-justify">
                    Bhaktithapa Sadak, House No. 159, New Baneshwor-10,
                    Kathmandu, Nepal
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-3  col-md-6 col-12">
              <div>
                <h4 class="text-white">
                  <span class="underline1 pb-2">Contact Number</span>
                </h4>
                <div class="row mt-5">
                  <div class="col-1 text-white"></div>
                  <div class="col-10 text-white">
                    <a
                      href="tel:+(977)-1-4469459"
                      class="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      +(977)-1-4469459
                    </a>
                  </div>
                </div>
                <div class="row mt-2">
                  <div class="col-1 text-white">
                    <ion-icon name="call-outline"></ion-icon>
                  </div>
                  <div class="col-10 text-white">
                    <a
                      href="tel:+(977)-9841487029"
                      class="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      +(977)-9841487029
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="footerBottom p-3 ">
        <div class="container-fluid px-lg-5">
          <center class="d-none d-lg-block">
            <span class="my-auto">
              Ⓒ Copyright 2020 | All Rights Reserved by by Shopify
            </span>
          </center>
          <center class="d-lg-none">
            <span class="my-auto text-center">
              Ⓒ Copyright 2020 | All Rights Reserved
              <br /> by Shopify
            </span>
          </center>
        </div>
      </section>
    </>
  );
};

export default Footer;
