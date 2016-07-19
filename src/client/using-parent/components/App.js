import React from 'react';

import ItemList from './Catalog';
import ShoppingCart from './ShoppingCart';
import OneClickOrder from './OneClickOrder';

export default function () {
  return (
    <div>
      <h1>Welcome to the Shop!</h1>
      <ItemList />
      <ShoppingCart />
      <OneClickOrder />
    </div>
  );
}
