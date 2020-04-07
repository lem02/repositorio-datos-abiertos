import React from 'react';
import './cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__icon">
        <i className="fa fa-shopping-cart" />
        <span>2</span>
      </div>
      <div className="cart__items"></div>
    </div>
  );
};
export default Cart;
