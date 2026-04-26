// src/components/SustainChange.jsx
import React from 'react';
import men1Image from '../assets/men1.jpeg';
import men2Image from '../assets/men2.jpeg';

const SustainChange = () => {
  return (
    <section className="sustain-section" id="sustain">
      <div className="container-xl text-center">
        <p className="sustain-pre">20 years of reimagining for citizens and</p>
        <h2 className="sustain-heading">sustaining change</h2>
        <p className="sustain-body">
          Technology is powerful, but is only one piece of the puzzle, when it comes to enhancing the<br />
          quality of life for every citizen. To have sustainable impact at scale, the collective energy of<br />
          local networks to solve local problems needs to be tapped into. Our partners &amp; networks<br />
          bring this collective energy to life. The ecosystem already exists; our task is to facilitate and<br />
          amplify their efforts. For 20 years, we've been turning small steps into lasting, meaningful<br />
          change, so that no citizen is left behind.
        </p>
        <div className="row justify-content-center g-4 mt-4">
          <div className="col-md-4">
            <div className="video-card">
              <img src={men1Image} alt="Leveraging Technology" className="video-thumb" />
              <div className="video-quote">
                <span className="quote-marks">"</span>
                Leveraging technology for sustainable development
              </div>
              <button className="play-btn"><i className="fa fa-play"></i></button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="video-card">
              <img src={men2Image} alt="Digitising Civic Services" className="video-thumb" />
              <div className="video-quote">
                <span className="quote-marks">"</span>
                Digitising civic services for better life
              </div>
              <button className="play-btn"><i className="fa fa-play"></i></button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <a href="#" className="btn btn-outline-about">About Us</a>
        </div>
      </div>
    </section>
  );
};

export default SustainChange;