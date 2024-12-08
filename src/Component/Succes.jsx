import React from 'react';
import './Succes.css'; // Import CSS file

const Success = () => {
  return (
    <div className="success-container">
      <div className="background-tiles"></div> {/* Tiling background */}
      <div className="success-card">
        <div className="success-icon">
          <span>✓</span>
        </div>
        <h1>Payment Successful!</h1>
        <p>Your payment was completed successfully. Thank you for choosing us!</p>
        <button className="success-button" onClick={() => window.location.href = '/'}>
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Success;
