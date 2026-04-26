// src/components/Hero.jsx
import React from 'react';
import heroImage from '../assets/banner_image.png';

const Hero = () => {
  return (
    <section className="hero-wrap" id="hero">
      <div className="container-xl">
        <div className="row align-items-center hero-inner">
          <div className="col-lg-6 col-md-7 hero-text-col">
            <p className="hero-pre">20 years of digital transformation in<br />public service delivery</p>
            <h1 className="hero-bold">It's possible.</h1>
            <p className="hero-desc">
              Catalysts. Ecosystem enablers. Problem Solvers.<br />
              At eGov, we're driven by the power of open digital<br />
              infrastructure and ecosystems to enable<br />
              governments deliver accessible, inclusive and<br />
              transparent services to every citizen.
            </p>
            <div className="hero-btns mt-4">
              <button type="button" className="btn btn-teal me-3">Our Approach</button>
              <button type="button" className="btn btn-outline-dark-circle">Our Impact</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 hero-img-col">
            <div className="hero-img-wrap">
              <div className="hero-blue-wave"></div>
              <img src={heroImage} alt="Citizens" className="hero-people-img" />
              <div className="hero-birds">
                <span className="bird b1"></span>
                <span className="bird b2"></span>
                <span className="bird b3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
