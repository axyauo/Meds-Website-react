import React from "react";
import "./FeaturedCategory.css";
import DataFeatureCategory from "./DataFeatureCategory";
import Heading_h3 from "../../Heading_h3/Heading_h3";

export default function FeaturedCategory() {
  const featured = DataFeatureCategory.map((value, index) => (
    <div className="col-lg-3 col-md-6 mb-3" key={index}>
      <div className="features_data">
        <div className="image-container">
          <img src={value.image} alt={value.heading} />
          <div className="overlay-content">
            <a href={value.link}>
              <h4>{value.heading}</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="bg-color1 py-5 mb-5">
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
          <div className="featured" id="featured-categories">
            <Heading_h3 title="Featured Categories" />
            <div className="row">{featured}</div>
          </div>
        </div>
      </section>
    </>
  );
}
