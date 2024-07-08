import React from "react";
import "./Footer.css";
import logo from "../images/logo.webp";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="intro_footer">
                <Link to="./">
                  <div className="footer_img">
                    <img src={logo} alt="Logo" />
                  </div>
                </Link>
                <p>
                  Our Head branch is located in Florida, USA. We ship all over
                  the USA in partnership with major courier delivery companies
                  such as FedEx, USPS, DHL Express & UPS. We also use FedEx
                  overnight services for the customers, so that our customers
                  can have their packages the next day in the morning before
                  12:00 p.m. anywhere in the US.
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-12">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 quick-links">
                  <h3 className="footer_h3">Quick Links</h3>
                  <ul>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/faqs">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="shop">Shop</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 col-12 categories">
                  <h3 className="footer_h3">Categories</h3>
                  <ul>
                    <li>
                      <Link to="#featured-categories">Featured Categories</Link>
                    </li>
                    <li>
                      <Link to="#product-grid">Product Grid</Link>
                    </li>
                    <li>
                      <Link to="#our-clients">Our Clients</Link>
                    </li>
                    <li>
                      <Link to="#latest-post">Latest Post</Link>
                    </li>
                    <li>
                      <Link to="#top-selling-products">
                        Top Selling Products
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 col-12 contact-us">
                  <h3 className="footer_h3">Contact Us</h3>
                  <p>
                    <i class="bi bi-geo-alt-fill"></i>
                    <Link
                      to="https://maps.app.goo.gl/P2fyxQ3ihDVbEwZc9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      202 Bluff St, Crystal River, FL 34428, Florida 34428, USA
                    </Link>
                  </p>
                  <p>
                    <i class="bi bi-envelope-fill"></i>
                    <Link to="mailto:info@getmedy.com">info@getmedy.com</Link>
                  </p>
                  <p>
                    <i class="bi bi-telephone-fill"></i>
                    <Link to="tel:+1 315 510 5500">+1-315-510-5500</Link>
                  </p>
                  <p>
                    <i class="bi bi-browser-edge"></i>
                    <Link
                      to="https://usmedschoice.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://usmedschoice.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
