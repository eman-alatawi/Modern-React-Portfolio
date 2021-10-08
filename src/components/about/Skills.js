import React from "react";

export default function Skills() {
  return (
    <div className="about-pictures-container text-center">
      <div className="row">
        <div className="col top-left">
          <i className="fas fa-laptop-code"></i>
          <h5>Development</h5>
        </div>
        <div className="col top-right">
          <i className="fas fa-briefcase"></i>
          <h4>Top Skills</h4>
        </div>
      </div>
      <div className="row">
        <div className="col bottom-left">
          <i className="fas fa-layer-group"></i>
          <h4>Design</h4>
        </div>
        <div className="col bottom-right">
          <i className="fas fa-mobile"></i>
          <h5>Responsive</h5>
        </div>
      </div>
    </div>
  );
}
