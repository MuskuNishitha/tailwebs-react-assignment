// src/components/ProductsPage.jsx
import React, { useState, useEffect } from 'react';
import productsData from '../data/products.json';
import ProductCard from './ProductCard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'platform', name: 'Platform' },
    { id: 'health', name: 'Health' },
    { id: 'governance', name: 'Governance' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'finance', name: 'Finance' }
  ];

  useEffect(() => {
    // Simulate API call with loading state
    setLoading(true);
    setTimeout(() => {
      setProducts(productsData.products);
      setFilteredProducts(productsData.products);
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    let results = products;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      results = results.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm.trim()) {
      results = results.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(results);
  }, [searchTerm, selectedCategory, products]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <>
      <section className="products-hero">
        <div className="container-xl">
          <h1>Our Products & Solutions</h1>
          <p>Discover our Digital Public Goods driving inclusive governance worldwide</p>
        </div>
      </section>
      
      <section className="filters-section">
        <div className="container-xl">
          <div className="row align-items-center g-4">
            <div className="col-md-5">
              <input
                type="text"
                className="search-input w-100"
                placeholder="Search products by name or description..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="col-md-7">
              <div className="category-buttons">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="latest-section" style={{ paddingTop: '40px' }}>
        <div className="container-xl">
          {loading ? (
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No products found</h3>
              <p>Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          ) : (
            <div className="row g-4">
              {filteredProducts.map(product => (
                <div className="col-md-6 col-lg-4" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;