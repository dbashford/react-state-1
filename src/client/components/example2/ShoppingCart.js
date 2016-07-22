import React, { PropTypes } from 'react';
import uniqueid from 'lodash.uniqueid';

const buildList = (cartItems) => {
  const listItems = cartItems.map((item) =>
    (
    <li key={uniqueid()} className="item">
      <h4>{item.name} <span>${item.cost}</span></h4>
    </li>
    )
  );
  return <ul>{listItems}</ul>;
};

const ShoppingCart = ({ cartItems }) => {
  const isEmpty = cartItems.length === 0;
  return (
    <section className="shopping-cart">
      <h2>Shopping Cart</h2>
      {isEmpty && <h3>The cart is empty.</h3>}
      {!isEmpty && buildList(cartItems)}
    </section>
  );
};

ShoppingCart.propTypes = {
  cartItems: PropTypes.array.isRequired
};

export default ShoppingCart;
