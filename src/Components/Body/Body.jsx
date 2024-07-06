import React from "react";
import TopSlider from "./TopSlider/TopSlider";
import Banner from "./Banner/Banner";
import FeaturedCategory from "./FeaturedCategory/FeaturedCategory";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import TopSellingProducts from "./TopSellingProducts/TopSellingProducts";
import BigSale from "./BigSale/BigSale";
import ProductGrid from "./ProductGrid/ProductGrid";
import TestimonialPerson from "./TestimonialPerson/TestimonialPerson";
import FindUs from "./FindUs/FindUs";
import Faqs from "./Faqs/Faqs";
import LatestPost from "./LatestPost/LatestPost";

export default function Body() {
  return (
    <>
      <TopSlider />
      <Banner />
      <FeaturedCategory />
      <FeaturedProduct />
      <TopSellingProducts />
      <BigSale />
      <ProductGrid />
      <TestimonialPerson />
      <FindUs />
      <Faqs />
      <LatestPost />
    </>
  );
}
