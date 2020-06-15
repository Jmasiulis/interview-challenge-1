import React from 'react';
import '../../utils/App.css';
import MenuOptionsPanel from '../MenuOptionsPanel';
import MenuPanel from '../MenuPanel';

export default function MenuLayout() {
  return <div className="wrapper">
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>5 items</span>
          </div>
          <div className="col-6 menu-summary-right">
            6x <span className="dietary">ve</span>
            4x <span className="dietary">v</span>
            12x <span className="dietary">n!</span>
          </div>
        </div>
      </div>
    </div>
    <div className="container menu-builder">
      <div className="row">
        <MenuOptionsPanel />
        <MenuPanel />
      </div>
    </div>
  </div>
};
