import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SiteContext } from '../../Context/siteContext';
import './cart.scss';

const Cart = () => {
  const { order, deleteItem } = useContext(SiteContext);

  return (
    <div className="cart">
      <div
        className={`cart__icon ${order.length > 0 ? 'cart__icon--move' : ''}`}
      >
        <i className="fa fa-shopping-cart" />
        <span>{order.length}</span>
      </div>
      <div className="cart__container">
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
        <div className="cart__total">
          <Link to="/form">Solicitar </Link>
        </div>
      </div>
    </div>
  );
};
export default Cart;
