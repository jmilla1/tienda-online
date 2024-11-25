import React from 'react';

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="mt-5">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.nombre} - ${item.precio}
            </li>
          ))}
        </ul>
      )}
      <h4 className="mt-3">Total: ${total}</h4>
    </div>
  );
};

export default Cart;
