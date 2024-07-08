import React from "react";
import "./TopNavigation.css";

export default function TopNavigation() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="contact_section">
                <ul>
                  <li>
                    <i class="bi bi-geo-alt-fill"></i>
                    <a
                      href="https://maps.app.goo.gl/P2fyxQ3ihDVbEwZc9"
                      target="_blank"
                    >
                      202 Bluff St, Crystal River, FL 34428, Florida 34428, USA
                    </a>
                  </li>
                  <li>
                    <i class="bi bi-telephone-fill"></i>
                    <a href="tel:+1 315 510 5500"> +1 (315) 510-5500</a>
                  </li>
                  <li>
                    <i class="bi bi-envelope-fill"></i>
                    <a href="mailto:info@getmedy.com">info@getmedy.com</a>
                  </li>
                  <li>
                    <i class="bi bi-clock-fill"></i> 24x7 Open
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div class="account-section">
                <span class="account-title">MY ACCOUNT</span>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  class="social-icon"
                >
                  <i class="bi bi-facebook facebook"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  class="social-icon"
                >
                  <i class="bi bi-twitter twitter"></i>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  class="social-icon"
                >
                  <i class="bi bi-youtube youtube"></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  class="social-icon"
                >
                  <i class="bi bi-instagram instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
