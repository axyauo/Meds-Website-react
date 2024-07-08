import React from "react";
import ProductBox from "../ProductBox/ProductBox";
import DataFeaturedProduct from "./DataFeaturedProduct";
import Heading_h3 from "../../Heading_h3/Heading_h3";
import "./FeaturedProduct.css";

export default function FeaturedProduct() {
  return (
    <>
      <section className="bg-color1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="featured_topic">
                <i className="bi bi-telegram"></i>
                <div className="cont">
                  <h5>FREE SHIPPING</h5>
                  <p>On all orders over $500.00</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="featured_topic">
                <i className="bi bi-gift"></i>
                <div className="cont">
                  <h5>GET DISCOUNT</h5>
                  <p>Get Coupon & Discount</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="featured_topic">
                <i className="bi bi-hourglass-split"></i>
                <div className="cont">
                  <h5>24/7 SUPPORT</h5>
                  <p>We will be at your service</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="featured_topic">
                <i className="bi bi-paypal"></i>
                <div className="cont">
                  <h5>SECURE PAYMENTS</h5>
                  <p>100% Risk Free Payments</p>
                </div>
              </div>
            </div>
          </div>
          <Heading_h3 title="Featured Product" />
          <div className="row">
            {DataFeaturedProduct.map((product) => (
              <div className="col-lg-4 col-12">
                <ProductBox product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container mb-5">
          <Heading_h3 title="Featured Product" />
          <div className="row">
            {DataFeaturedProduct.map((product) => (
              <div className="col-lg-4 col-12">
                <ProductBox product={product} />
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
