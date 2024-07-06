import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <i className="bi bi-chevron-double-right"></i>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="contactPage">
        <h1 className="heading_h1">Contact Us</h1>
        <main className="main">
          <section className="contactForm">
            <h2>Send us a message</h2>
            <form>
              <div className="formGroup">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="formGroup">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </section>
          <section className="contactInfo">
            <h2>Contact Information</h2>
            <ul>
              <li>Email: info@medsapp.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Medicine Street, City, Country</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Contact;
