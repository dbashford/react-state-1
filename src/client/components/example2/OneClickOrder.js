import React, { PropTypes } from 'react';

const OneClickOrder = ({ placeOrder, cartItems }) => {
  let retVal = null;
  if (cartItems.length > 0) {
    const total = cartItems.reduce((tot, item) =>
      tot + parseInt(item.cost, 10)
    , 0);
    retVal = (
      <section className="one-click-order">
        <h2>One Click Order</h2>
        <button type="button" onClick={placeOrder} >
          Place Order for ${total}
        </button>
      </section>
    );
  }
  return retVal;
};

OneClickOrder.propTypes = {
  placeOrder: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired
};

export default OneClickOrder;
