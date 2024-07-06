import React from "react";
import ProductBox from "../ProductBox/ProductBox";
import DataFeaturedProduct from "./DataFeaturedProduct";
import Heading_h3 from "../../Heading_h3/Heading_h3";

export default function FeaturedProduct() {
  return (
    <>
      <section>
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
      </section>
    </>
  );
}
