import React from "react";
import "./BottomNavigation.css";
import Heading_h3 from "../../Heading_h3/Heading_h3";
import { Link } from "react-router-dom";

const MedicineListSidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`medicine-list-sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <Heading_h3 title="Product Categories" />
        <button className="close-btn" onClick={onClose}>
          <i className="bi bi-x"></i>
        </button>
      </div>
      <ul className="medicine-list">
        <Link to="/buy-adderall-online">
          <li>Buy Adderall Online</li>
        </Link>
        <Link to="/buy-adderall-online">
          <li>Buy Ambien Online</li>
        </Link>
        <Link to="/buy-adderall-online">
          <li>Buy Ativan Online</li>
        </Link>
        <Link to="/buy-adderall-online">
          <li>Buy Butalbital Online</li>
        </Link>
        <Link to="/buy-adderall-online">
          <li>Buy Carisoprodol Online</li>
        </Link>
        <Link to="/buy-adderall-online">
          <li>Buy Clonazepam Online</li>
        </Link>
        <Link to="/buy-adderall-online">
          <li>Buy Fioricet Online</li>
        </Link>
        <Link to="/buy-adderall-online">
          <li>Buy Gabapentin Online</li>
        </Link>
        <Link to="/buy-adderall-online">
          <li>Buy Hydrocodone Online</li>
        </Link>
        <Link to="/buy-klonopin-online">
          <li>Buy Klonopin Online</li>
        </Link>
        <Link to="/buy-ksalol-online">
          <li>Buy Ksalol Online</li>
        </Link>
        <Link to="/buy-oxycodone-online">
          <li>Buy Oxycodone Online</li>
        </Link>
        <Link to="/buy-percocet-online">
          <li>Buy Percocet Online</li>
        </Link>
        <Link to="/buy-soma-online">
          <li>Buy Soma Online</li>
        </Link>
        <Link to="/buy-tapentadol-online">
          <li>Buy Tapentadol Online</li>
        </Link>
        <Link to="/buy-tramadol-online">
          <li>Buy Tramadol Online</li>
        </Link>
        <Link to="/buy-valium-online">
          <li>Buy Valium Online</li>
        </Link>
        <Link to="/buy-xanax-online">
          <li>Buy Xanax Online</li>
        </Link>
        <Link to="/buy-zolpidem-online">
          <li>Buy Zolpidem Online</li>
        </Link>
        <Link to="/pain-o-soma">
          <li>Pain O Soma</li>
        </Link>
        <Link to="/xanax-bars">
          <li>Xanax Bars</li>
        </Link>
      </ul>
    </div>
  );
};

export default MedicineListSidebar;
