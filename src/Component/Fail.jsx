import React from 'react';
import './Failure.css'; // Import CSS file

const Failure = () => {
  return (
    <div className="failure-container">
      <div className="background-tiles"></div> {/* Tiling background */}
      <div className="failure-card">
        <div className="failure-icon">
          <span>✗</span>
        </div>
        <h1>Payment Failed</h1>
        <p>Something went wrong with your payment. Please try again later.</p>
        <button className="failure-button" onClick={() => window.location.href = '/retry'}>
          Try Again
        </button>
        <button className="failure-secondary-button" onClick={() => window.location.href = '/help'}>
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default Failure;
