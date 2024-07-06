import React, { useEffect, useState } from "react";
import "./BottomNavigation.css";
import MedicineListSidebar from "./MedicineListSidebar";
import { Link } from "react-router-dom";

export default function BottomNavigation() {
  useEffect(() => {
    const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-color">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/faqs">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="mobile_view">
            <div className="cartValue">
              <button>
                <i class="bi bi-cart-fill"></i>
              </button>
              <span class="af-cart-amount gbl-bdge-bck-c">$0.00</span>
            </div>
            <i class="bi bi-search"></i>
          </div> */}
          <div className="another_list">
            <div className="mobile_view">
              <i class="bi bi-cart-fill"></i>
              <span class="af-cart-amount gbl-bdge-bck-c">$0.00</span>
              <i class="bi bi-search"></i>
            </div>
            <div
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              data-bs-title="Admin Login"
            >
              <i className="bi bi-person-circle"></i>
            </div>

            <i class="bi bi-heart"></i>
            <i className="bi bi-list" onClick={toggleSidebar}></i>
          </div>
        </div>
      </nav>
      <MedicineListSidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
    </>
  );
}
