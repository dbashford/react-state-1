import React, { Component } from 'react';
import uniqueid from 'lodash.uniqueid';

export default class ShoppingCart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  emptyCart() {
    this.setState({
      items: []
    });
  }

  addToCart(item) {
    const newItems = this.state.items.concat(item);
    this.setState({
      items: newItems
    });
  }

  buildList = () => {
    const listItems = this.state.items.map((item) =>
      (
      <li key={uniqueid()} className="item">
        <h4>{item.name} <span>${item.cost}</span></h4>
      </li>
      )
    );
    return <ul>{listItems}</ul>;
  }

  render() {
    const isEmpty = this.state.items.length === 0;
    return (
      <section className="shopping-cart">
        <h2>Shopping Cart</h2>
        {isEmpty && <h3>The cart is empty.</h3>}
        {!isEmpty && this.buildList()}
      </section>
    );
  }
}
