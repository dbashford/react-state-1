import React, { Component, PropTypes } from 'react';

export default class OneClickOrder extends Component {

  static propTypes = {
    orderPlaced: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      total: 0
    };
  }

  addToOrder(item) {
    this.setState({
      items: this.state.items.concat(item),
      total: this.state.total + parseInt(item.cost, 10)
    });
  }

  placeOrder = () => {
    // ajax call to submit order
    this.setState({
      total: 0,
      items: []
    });
    this.props.orderPlaced();
  }

  render() {
    let retVal = null;
    if (this.state.total !== 0) {
      retVal = (
        <section className="one-click-order">
          <h2>One Click Order</h2>
          <button type="button" onClick={this.placeOrder}>
            Place Order for ${this.state.total}
          </button>
        </section>
      );
    }
    return retVal;
  }
}
