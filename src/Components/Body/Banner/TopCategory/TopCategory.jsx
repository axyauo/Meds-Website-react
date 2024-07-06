import React from "react";
import "./TopCategory.css";
import DataTopCategory from "./DataTopCategory";

export default function TopCategory() {
  return (
    <>
      <ul className="top_category">
        <li className="top_category_heading">
          <i class="bi bi-list-task"></i> Top Category
        </li>
        {DataTopCategory.map((medicine) => (
          <a href={medicine.link}>
            <li key={medicine.id}>{medicine.name}</li>
          </a>
        ))}
      </ul>
    </>
  );
}
