import React from "react";
import formatPrice from "../helpers/formatPrice.js";

class CheckOut extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    CreditCard: "",
    ZipCode: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { total } = this.props;
    const { firstName, lastName, email, CreditCard, ZipCode } = this.state;
    if (!firstName || !lastName || !email) {
      window.alert("Input is not valid");
    } else if (CreditCard.length !== 16) {
      window.alert("Credit card number is not valid");
    } else if (ZipCode.length !== 5) {
      window.alert("Zip code is not valid");
    } else {
      window.alert(
        `Purchase complete! You will be charged $${formatPrice(total)}`
      );
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { firstName, lastName, email, CreditCard, ZipCode } = this.state;
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <h2>Checkout</h2>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label htmlFor="CreditCard">Credit Card</label>
          <input
            id="CreditCard"
            name="CreditCard"
            value={CreditCard}
            onChange={this.handleChange}
          />
          <label htmlFor="ZipCode">Zip Code</label>
          <input
            id="ZipCode"
            name="ZipCode"
            value={ZipCode}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Buy Now</button>
        </form>
      </section>
    );
  }
}

export default CheckOut;
