import React from "react";
import productData from "../data/productData.js";
import InventoryItem from "./InventoryItem";
import "./Inventory.css";

const Inventory = ({ addProduct }) => {
  const products = productData.map((product) => {
    return (
      <InventoryItem
        key={product.id}
        product={product}
        addProduct={addProduct}
      />
    );
  });
  return (
    <section className="Products">
      <h2>My Garage Sale</h2>
      <ul>{products}</ul>
    </section>
  );
};
export default Inventory;
