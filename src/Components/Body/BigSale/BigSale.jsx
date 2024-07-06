import React from "react";
import "./BigSale.css";
import big_sale from "../../images/big_sale.jpg";
import Button01 from "../../Button/Button01";
import CountdownTimer from "./CountdownTimer";

export default function BigSale() {
  // Calculate the target date 9 days from now
  const calculateTargetDate = () => {
    const now = new Date();
    now.setDate(now.getDate() + 9);
    return now.toISOString();
  };

  const targetDate = calculateTargetDate();

  const backgroundStyle = {
    backgroundImage: `url(${big_sale})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "400px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    padding: "20px",
  };

  return (
    <section className="bg_img">
      <div className="big_sale" style={backgroundStyle}>
        <div className="overlay_content">
          <h3>BIG 2024 SALE ENDS</h3>
          <p>Up to 10% off on all products</p>
          <CountdownTimer targetDate={targetDate} />
          <span>
            Hurry up and ORDER NOW. Time is ticking on the Big 2024 sale.
          </span>
          <a href="#">
            <Button01 name="Buy Now" />
          </a>
        </div>
      </div>
    </section>
  );
}
