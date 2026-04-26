// src/components/Supporters.jsx
import React from 'react';

const Supporters = () => {
  return (
    <section className="supporters-section" id="supporters">
      <div className="container-xl">
        <h2 className="supporters-heading">Our <strong>Supporters</strong></h2>
        <div className="supporters-logos d-flex flex-wrap justify-content-center align-items-center gap-5 mt-5">
          <div className="supporter-logo-item">
            <div className="sup-logo-text co-develop">
              <span className="co-icon">co</span>
              <span className="co-label">CO-DEVELOP</span>
            </div>
          </div>
          <div className="supporter-logo-item">
            <div className="sup-logo-text gates">BILL &amp; MELINDA<br />GATES <em>foundation</em></div>
          </div>
          <div className="supporter-logo-item">
            <div className="sup-logo-text tata">TATA TRUSTS</div>
          </div>
          <div className="supporter-logo-item">
            <div className="sup-logo-text global-fund">
              <span className="gf-icon">⟳</span> THE<br />GLOBAL<br />FUND
            </div>
          </div>
          <div className="supporter-logo-item">
            <div className="sup-logo-text nilekani">N | NANDAN<br />NILEKANI<br /><small>philanthropies</small></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supporters;