import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import UnregisteredUserNavbar from "../Components/UnregisteredUserNavbar";

const Products = () => {
  return (
    <>
      <UnregisteredUserNavbar />
      <section className="template-section">
        <div
          style={{
            "background-color": "#cfcece",
            "border-radius": "0px",
            color: "#000",
          }}
        >
          <div class="container py-5">
            <h1 class="text-center fw-bold mt-4">
              Select your desired template
            </h1>

            <h4 class="text-center lead fw-bold mt-5">
              Choose a template to fit your website
            </h4>
          </div>
        </div>
      </section>
      <section>
        <div class="container py-5 product-links">
          <div class="row row-col-lg-4 text-center m-auto" id="sect2">
            <div class="col">
              <NavLink to="" end>
                All
              </NavLink>
            </div>
            <div class="col">
              <NavLink to="/products/blogTemplates">Blog</NavLink>
            </div>
            <div class="col">
              <NavLink to="/products/portfolioTemplates">Portfolio</NavLink>
            </div>
            <div class="col">
              <NavLink to="/products/businessTemplates">Business</NavLink>
            </div>
          </div>
        </div>
        <div className="products-content">
          <Outlet />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
