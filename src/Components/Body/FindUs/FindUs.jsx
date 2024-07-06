import React from "react";
import map from "../../images/map.png";
import "./FindUs.css";

export default function FindUs() {
  const backgroundStyle = {
    backgroundImage: `url(${map})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "auto",
    width: "100%",
    position: "relative",
    color: "white",
    padding: "20px",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
  };

  return (
    <>
      <section style={backgroundStyle} className="overlay_form">
        <div className="container my-5" style={contentStyle}>
          <div className="row">
            <div className="col-md-6 col-12 mb-3">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name (required)</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email (required)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
            <div className="col-md-6 col-12">
              <div className="contact-details">
                <h2>Contact Data</h2>
                <p>
                  <b>Phone:</b> +1234567890
                </p>
                <p>
                  <b>Email:</b> contact@example.com
                </p>
                <p>
                  <b>Address:</b> 1234 Example St, City, Country
                </p>
                <p>
                  <b>Opening Hour:</b> 24*7 Opens
                </p>
                <p>
                  <b>Website:</b> https://demomeds_website.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
