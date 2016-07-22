import React, { Component } from 'react';

import Catalog from './Catalog';
import ShoppingCart from './ShoppingCart';
import OneClickOrder from './OneClickOrder';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
  }

  addToCart = (item) => {
    this.setState({
      cartItems: this.state.cartItems.concat(item)
    });
  }

  placeOrder = () => {
    this.setState({
      cartItems: []
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Poke-Shop!</h1>
        <Catalog addToCart={this.addToCart} />
        <ShoppingCart cartItems={this.state.cartItems} />
        <OneClickOrder cartItems={this.state.cartItems} placeOrder={this.placeOrder} />
      </div>
    );
  }
}
