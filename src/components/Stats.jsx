// src/components/Stats.jsx
import React from 'react';

const Stats = () => {
  return (
    <section className="stats-banner" id="stats">
      <div className="container-xl">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="stat-big-num">1,000,000,100+</h2>
          </div>
          <div className="col-lg-6">
            <p className="stat-caption">Citizens availing public services through eGov's<br />Digital Public Goods (DPG)</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-6 col-md-3">
            <p className="stat-sub-num">1.1 Billion+</p>
            <p className="stat-sub-label">Public services delivered</p>
          </div>
          <div className="col-6 col-md-3">
            <p className="stat-sub-num">50+ partners</p>
            <p className="stat-sub-label">From technology,<br />governments and NGOs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;