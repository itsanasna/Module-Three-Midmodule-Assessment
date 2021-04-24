import "./App.css";
import React from "react";
import Inventory from "./Components/Inventory.js";
import Cart from "./Components/Cart.js";
import CheckOut from "./Components/CheckOut";

class App extends React.Component {
  state = { cart: [] };
  addProduct = (product) => {
    this.setState((prevState) => {
      return { cart: [product, ...prevState.cart] };
    });
  };

  render() {
    const { cart } = this.state;
    const subtotal = cart.reduce((sum, product) => sum + product.price, 0);
    const tax = (5 / 100) * subtotal;
    return (
      <div>
        <section>
        <Inventory addProduct={this.addProduct} />
        <Cart cart={cart} subtotal={subtotal || 0} tax={tax}  />
        <CheckOut total={subtotal + tax} />

        </section>
      </div>
    );
  }
}
export default App;
