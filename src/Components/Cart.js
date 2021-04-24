import React from "react";
import formatPrice from "../helpers/formatPrice.js";

const Cart = ({ cart, subtotal, tax }) => {
  return (
    <section>
      <h2>Cart</h2>
      <ul className="Cart">
        {cart.map(product => {
            const {name, price, id} = product
          return (
            <li key={id}>
              {product.name}: {formatPrice(product.price)}
            </li>
          );
        })}
      </ul>
      <h3>Subtotal: {formatPrice(subtotal)} </h3>
      <h3>Tax: {formatPrice(tax)} </h3>
      <h3>Total: {formatPrice(subtotal + tax)} </h3>
    </section>
  );
};
export default Cart;
