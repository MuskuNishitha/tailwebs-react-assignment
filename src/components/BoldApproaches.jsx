// src/components/BoldApproaches.jsx
import React, { useState } from 'react';
import bedImage from '../assets/bed_vacination.jpeg';
import vaccImage from '../assets/vacination.jpeg';

const BoldApproaches = () => {
  const [activeTab, setActiveTab] = useState('Public Health');

  const tabs = ['Public Health', 'Public Finance', 'Local Governance', 'Water & Sanitation'];

  return (
    <section className="bold-section" id="approaches">
      <div className="container-xl">
        <div className="bold-card-wrap">
          <div className="row align-items-stretch">
            <div className="col-lg-5 bold-left">
              <p className="bold-pre">Big problems need</p>
              <h2 className="bold-heading">bold approaches</h2>
              <div className="bold-tabs mt-4">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    className={`bold-tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-lg-7 bold-right">
              <div className="row g-3">
                <div className="col-6">
                  <div className="impact-card impact-teal">
                    <div className="impact-num">210+</div>
                    <p className="impact-desc">cities LIVE with 10BedICU across India</p>
                    <a href="#" className="btn btn-white-pill mt-2">Read More</a>
                    <div className="impact-img-wrap">
                      <img src={bedImage} alt="ICU" className="impact-img" />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="impact-card impact-blue">
                    <div className="impact-num">2 Bn</div>
                    <p className="impact-desc">COVID-19 vaccination certificates issued</p>
                    <a href="#" className="btn btn-white-pill mt-2">Read More</a>
                    <div className="impact-img-wrap">
                      <img src={vaccImage} alt="Vaccination" className="impact-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoldApproaches;