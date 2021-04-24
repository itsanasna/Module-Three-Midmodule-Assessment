import React from "react";
import formatPrice from "../helpers/formatPrice.js";

const InventoryItem = ({ product, addProduct }) => {
  const { name, description, img, price } = product;
  return (
    <li>
      <h3>{name}</h3>

      <p>Price: {formatPrice(price)}</p>
      <button onClick={() => addProduct(product)}>Add To Cart</button>
      <img src={img} alt="Pic" />
      <p>{description}</p>
    </li>
  );
};
export default InventoryItem;
