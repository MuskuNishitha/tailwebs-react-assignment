// src/components/DigitPlatform.jsx
import React from 'react';
import womenImage from '../assets/women.png';

const DigitPlatform = () => {
  return (
    <section className="digit-section" id="digit">
      <div className="container-xl">
        <div className="row align-items-center">
          <div className="col-lg-6 digit-left">
            <div className="digit-logo-wrap mb-3">
              <span className="digit-dots">
                <span className="dot dot-orange"></span>
                <span className="dot dot-green"></span>
                <span className="dot dot-blue"></span>
                <span className="dot dot-red"></span>
              </span>
              <span className="digit-title-text">DIGIT</span>
              <div className="digit-sub-text">by eGov Foundation</div>
            </div>
            <p className="digit-pre">Our open source</p>
            <h2 className="digit-heading">technology–for–good<br />platform</h2>
            <p className="digit-body">
              DIGIT, short for Digital Infrastructure for Governance, Inclusion and Transformation is eGov's open-source platform with reusable building blocks and shared data registries that can be used to build solutions in multiple sectors.
            </p>
            <a href="#" className="btn btn-outline-white-pill mt-3">Explore the platform</a>
          </div>
          <div className="col-lg-6 digit-right">
            <img src={womenImage} alt="Woman using phone" className="digit-woman-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitPlatform;