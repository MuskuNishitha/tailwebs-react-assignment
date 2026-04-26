// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-price">
          {product.price === 0 ? 'Open Source / Free' : `$${product.price.toLocaleString()}`}
        </div>
        <button className="btn-add-cart">
          {product.price === 0 ? 'Learn More' : 'Request Demo'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;