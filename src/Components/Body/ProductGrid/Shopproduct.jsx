import React from "react";

export default function Shopproduct({ product }) {
  return (
    <>
      <div className="sliders">
        <div className="top_slide_img">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="top_slide_content text-center">
          <p>{product.title}</p>
          <h6>{product.name}</h6>
          <span>
            <i className="bi bi-currency-rupee"></i> {product.price}
          </span>
          <p>
            <i className="bi bi-bar-chart-line-fill"></i> {product.sold_item}{" "}
            Item Sold
          </p>
          <div className="content_box flex-column">
            <a href={product.link}>
              <button>Buy Now</button>
            </a>
            <div className="mt-2">
              <i className="bi bi-heart"></i>
              <i className="bi bi-search"></i>
              <i className="bi bi-arrow-clockwise"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
