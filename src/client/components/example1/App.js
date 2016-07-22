import React, { Component } from 'react';

import Catalog from './Catalog';
import ShoppingCart from './ShoppingCart';
import OneClickOrder from './OneClickOrder';

export default class App extends Component {

  addToCart = (item) => {
    this.refs.cart.addToCart(item);
    this.refs.order.addToOrder(item);
  }

  orderPlaced = () => {
    this.refs.cart.emptyCart();
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Poke-Shop!</h1>
        <Catalog addToCart={this.addToCart} />
        <ShoppingCart ref="cart" />
        <OneClickOrder ref="order" orderPlaced={this.orderPlaced} />
      </div>
    );
  }
}
