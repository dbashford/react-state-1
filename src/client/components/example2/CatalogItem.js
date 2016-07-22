import React, { PropTypes } from 'react';

function Item(
  { id, name, description, cost, addToCart }
) {
  const addItem = () => {
    addToCart({
      id,
      name,
      description,
      cost
    });
  };

  return (
    <div className="item">
      <button
        type="button"
        onClick={addItem}
      >
        Add to Cart
      </button>
      <h4>{name} <span>${cost}</span></h4>
      <p>{description}</p>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default Item;
