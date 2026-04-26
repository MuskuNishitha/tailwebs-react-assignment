// src/components/LatestSection.jsx
import React, { useState } from 'react';
import meetingImage from '../assets/metting.jpeg';
import threeMembersImage from '../assets/3members.jpeg';
import hdMettImage from '../assets/hd_mett.jpeg';

const LatestSection = () => {
  const [activeFilter, setActiveFilter] = useState("What's New");

  const filters = ['What\'s New', 'Articles', 'Whitepapers', 'Case Studies', 'Strategy Papers', 'News & Media', 'Videos', 'Newsletter'];

  return (
    <section className="latest-section" id="latest">
      <div className="container-xl">
        <h2 className="latest-heading">Latest at <strong>eGov</strong></h2>
        <div className="latest-filters d-flex flex-wrap gap-2 mt-4 mb-5">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : 'outline'}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="news-card">
              <div className="news-thumb-wrap">
                <img src={meetingImage} alt="State-led Urban Digital Transformation" className="news-thumb" />
              </div>
              <div className="news-body-wrap">
                <h5 className="news-title">State-led Urban Digital Transformation</h5>
                <div className="news-meta">
                  <span className="dot-blue-sm"></span> Mathews P Joseph &nbsp;+2 More &nbsp;&nbsp;
                  <span className="dot-blue-sm"></span> 13 Mar 2026
                </div>
                <div className="news-tags mt-2">
                  <span className="news-tag">Odisha</span>
                  <span className="news-tag">Kerala</span>
                  <span className="news-tag">Local Governance</span>
                  <span className="news-tag">Andhra Pradesh</span>
                  <span className="news-tag">Punjab</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="news-card">
              <div className="news-thumb-wrap news-thumb-sky">
                <img src={threeMembersImage} alt="DOT Newsletter" className="news-thumb" />
              </div>
              <div className="news-body-wrap">
                <h5 className="news-title">DOT – A DIGIT QUARTERLY NEWSLETTER</h5>
                <div className="news-meta">
                  <span className="dot-blue-sm"></span> eGov Foundation &nbsp;+2 More &nbsp;&nbsp;
                  <span className="dot-blue-sm"></span> 20 Jan 2026
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="news-card">
              <div className="news-thumb-wrap news-thumb-cream">
                <img src={hdMettImage} alt="DOT 2025 Top Stories" className="news-thumb" />
              </div>
              <div className="news-body-wrap">
                <h5 className="news-title">DOT 2025 | TOP STORIES OF PARTNERSHIPS &amp; IMPACT</h5>
                <div className="news-meta">
                  <span className="dot-blue-sm"></span> eGov Foundation &nbsp;+2 More &nbsp;&nbsp;
                  <span className="dot-blue-sm"></span> 30 Dec 2025
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <a href="#" className="btn btn-teal">See all</a>
        </div>
      </div>
    </section>
  );
};

export default LatestSection;