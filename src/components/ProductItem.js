import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  const handleClick = () => {
    onAddToCart(product);
  };

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{product.nombre}</h5>
          <p className="card-text">Precio: ${product.precio}</p>
          <button 
            className="btn btn-primary" 
            onClick={handleClick}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
