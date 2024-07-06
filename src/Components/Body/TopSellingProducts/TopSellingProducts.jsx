import React from "react";
import Heading_h3 from "../../Heading_h3/Heading_h3";
import DataTopSellingProducts from "./DataTopSellingProducts";
import Button01 from "../../Button/Button01";
import "./TopSellingProducts.css";

export default function TopSellingProducts() {
  let data = DataTopSellingProducts.map((item) => (
    <div className="col-lg-4 col-12 mb-3">
      <div className="selling_product">
        <img src={item.image} alt={item.name} />
        <div className="sp_content">
          <p>{item.title}</p>
          <h3>{item.name}</h3>
          <h4>
            <i class="bi bi-currency-rupee"></i> {item.Price}
          </h4>
          <span>
            <i class="bi bi-bar-chart-line-fill"></i> {item.sold_item} Item Sold
          </span>
          <a href="{item.link}">
            <Button01 name="Buy Now" />
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <section className="bg-color1">
        <div className="container py-3">
          <Heading_h3 title="Top Selling Products" />
          <div className="row">{data}</div>
        </div>
      </section>
    </>
  );
}
