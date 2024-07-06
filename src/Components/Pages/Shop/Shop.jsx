import React, { useEffect } from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
import Heading_h3 from "../../Heading_h3/Heading_h3";
import DataProductGrid from "../../Body/ProductGrid/DataProductGrid";
import Shopproduct from "../../Body/ProductGrid/Shopproduct";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <i className="bi bi-chevron-double-right"></i>
            <li>Shop</li>
          </ul>
        </div>
      </div>
      <section className="inner_post about">
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-8 col-12">
              <h1 className="heading_h1 my-4">Shop</h1>
              <div className="row">
                {DataProductGrid.map((product) => (
                  <div className="col-lg-4 col-12 key={product.id}">
                    <Shopproduct product={product} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <Heading_h3 title="Product Category" />
              <ul>
                <li>
                  <Link to="/buy-adderall-online">Buy Adderall Online</Link>
                </li>
                <li>
                  <Link to="/buy-ambien-online">Buy Ambien Online</Link>
                </li>
                <li>
                  <Link to="/buy-ativan-online">Buy Ativan Online</Link>
                </li>
                <li>
                  <Link to="/buy-butalbital-online">Buy Butalbital Online</Link>
                </li>
                <li>
                  <Link to="/buy-carisoprodol-online">
                    Buy Carisoprodol Online
                  </Link>
                </li>
                <li>
                  <Link to="/buy-clonazepam-online">Buy Clonazepam Online</Link>
                </li>
                <li>
                  <Link to="/buy-fioricet-online">Buy Fioricet Online</Link>
                </li>
                <li>
                  <Link to="/buy-gabapentin-online">Buy Gabapentin Online</Link>
                </li>
                <li>
                  <Link to="/buy-hydrocodone-online">
                    Buy Hydrocodone Online
                  </Link>
                </li>
                <li>
                  <Link to="/buy-klonopin-online">Buy Klonopin Online</Link>
                </li>
                <li>
                  <Link to="/buy-ksalol-online">Buy Ksalol Online</Link>
                </li>
                <li>
                  <Link to="/buy-oxycodone-online">Buy Oxycodone Online</Link>
                </li>
                <li>
                  <Link to="/buy-percocet-online">Buy Percocet Online</Link>
                </li>
                <li>
                  <Link to="/buy-soma-online">Buy Soma Online</Link>
                </li>
                <li>
                  <Link to="/buy-tapentadol-online">Buy Tapentadol Online</Link>
                </li>
                <li>
                  <Link to="/buy-tramadol-online">Buy Tramadol Online</Link>
                </li>
                <li>
                  <Link to="/buy-valium-online">Buy Valium Online</Link>
                </li>
                <li>
                  <Link to="/buy-xanax-online">Buy Xanax Online</Link>
                </li>
                <li>
                  <Link to="/buy-zolpidem-online">Buy Zolpidem Online</Link>
                </li>
                <li>
                  <Link to="/pain-o-soma">Pain O Soma</Link>
                </li>
                <li>
                  <Link to="/xanax-bars">Xanax Bars</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
