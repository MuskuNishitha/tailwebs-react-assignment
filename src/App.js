// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Stats from '../src/components/Stats';
import BoldApproaches from '../src/components/BoldApproaches';
import SustainChange from '../src//components/SustainChange';
import DigitPlatform from '../src/components/DigitPlatform';
import LatestSection from '../src/components/LatestSection';
import Supporters from '../src/components/Supporters';
import Footer from '../src/components/Footer';
import ProductsPage from '../src/components/ProductsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Stats />
              <BoldApproaches />
              <SustainChange />
              <DigitPlatform />
              <LatestSection />
              <Supporters />
            </>
          } />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;