// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-main">
        <div className="container-xl">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="footer-brand mb-3">
                <span className="brand-e-footer">e</span><span className="brand-gov-footer">GOV</span>
                <div className="brand-sub-footer">FOUNDATION</div>
              </div>
              <p className="footer-tagline">Catalysing digital transformation in public service delivery at speed &amp; scale.</p>
              <div className="social-icons mt-4">
                <a href="#" className="social-icon-circle"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon-circle"><i className="fab fa-x-twitter"></i></a>
                <a href="#" className="social-icon-circle"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="social-icon-circle"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <h6 className="footer-col-heading">Useful Links</h6>
              <div className="row">
                <div className="col-6">
                  <ul className="footer-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Our Impact</a></li>
                    <li><a href="#">DIGIT Sandbox</a></li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="footer-links">
                    <li><a href="#">Our People</a></li>
                    <li><a href="#">Financials</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <h6 className="footer-col-heading">Subscribe Now</h6>
              <p className="footer-subscribe-text">Receive regular updates of our monthly newsletter DOT – in your inbox.</p>
              <div className="subscribe-input-wrap">
                <input type="email" placeholder="Enter Your Email" className="subscribe-input" />
                <button className="subscribe-btn"><i className="fa fa-envelope"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-xl d-flex flex-wrap justify-content-between align-items-center">
          <span className="footer-copy">©2024. eGov. All Rights Reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;