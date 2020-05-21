import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SiteContext } from '../../Context/siteContext';
import './cart.scss';

const Cart = () => {
  const { order, deleteItem } = useContext(SiteContext);
  const [cartHover, setCartHover] = useState();

  return (
    <div
      onMouseOver={() => {
        setCartHover(true);
      }}
      onMouseLeave={() => {
        setCartHover(false);
      }}
      className="cart"
    >
      <div
        className={`cart__icon ${order.length > 0 ? 'cart__icon--move' : ''}`}
      >
        <i className="fa fa-shopping-cart" />
        <span>{order.length}</span>
      </div>
      <div
        className={`cart__container ${
          cartHover ? 'cart__container--hover' : ''
        }`}
      >
        <div className="cart__items scroll-styles">
          {order.length > 0 ? (
            <>
              {order.map((item, index) => (
                <article key={index} className="cart__item">
                  <p>{item.titulo}</p>
                  <button onClick={() => deleteItem(item)}>
                    <i className="fa fa-trash" />
                  </button>
                </article>
              ))}
            </>
          ) : (
            <p className="cart__items__empty">El carrito de datos está vacío</p>
          )}
        </div>
        <div
          className={`cart__total ${
            order.length <= 0 ? 'cart__total--disable' : ''
          }`}
        >
          <Link
            to={order.length > 0 ? '/form' : '#'}
            onClick={() => {
              if (order > 0) {
                setCartHover(false);
              }
            }}
          >
            Solicitar
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Cart;
