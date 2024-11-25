import React, { Component } from 'react';
import ProductItem from './ProductItem';
import Cart from './Cart';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, nombre: 'Producto A', precio: 50 },
        { id: 2, nombre: 'Producto B', precio: 30 },
        { id: 3, nombre: 'Producto C', precio: 20 },
      ],
      cart: [],
    };
  }

  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>Lista de Productos</h1>
        <div className="row">
          {this.state.products.map((product) => (
            <ProductItem 
              key={product.id} 
              product={product} 
              onAddToCart={this.addToCart} 
            />
          ))}
        </div>
        <Cart cartItems={this.state.cart} />
      </div>
    );
  }
}

export default ProductList;
