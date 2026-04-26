// src/components/Navbar.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('mainNav');
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 10);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="top-bar">
        <div className="container-xl d-flex justify-content-end align-items-center gap-4">
          <a href="#" className="top-link">Events</a>
          <a href="#" className="top-link">Contact us</a>
          <div className="lang-selector">
            <span className="flag">🇬🇧</span> ENG <i className="fa fa-caret-down ms-1"></i>
          </div>
        </div>
      </div>
      <header className="site-header sticky-top">
        <nav className="navbar navbar-expand-lg" id="mainNav">
          <div className="container-xl">
            <Link className="navbar-brand" to="/">
              <div className="brand-logo">
                <span className="brand-e">e</span><span className="brand-gov">GOV</span>
                <div className="brand-sub">FOUNDATION</div>
              </div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navMenu">
              <ul className="navbar-nav align-items-center gap-1">
                <li className="nav-item dropdown">
                  <a className="nav-link nav-dd" href="#">About Us <i className="fa fa-chevron-down nav-arrow"></i></a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link nav-dd" href="#">Areas of work <i className="fa fa-chevron-down nav-arrow"></i></a>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link nav-dd" to="/products">Products <i className="fa fa-chevron-down nav-arrow"></i></Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link nav-dd" href="#">Our Platform <i className="fa fa-chevron-down nav-arrow"></i></a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link nav-dd" href="#">Ecosystem <i className="fa fa-chevron-down nav-arrow"></i></a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link nav-dd" href="#">Resources <i className="fa fa-chevron-down nav-arrow"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-search-icon" href="#"><i className="fa fa-search"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;