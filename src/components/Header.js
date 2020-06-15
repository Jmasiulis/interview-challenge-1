import React from 'react';

export default function Header({itemsCount, selectedDietaries}) {
  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{itemsCount} items</span>
          </div>
          <div className="col-6 menu-summary-right">
            {selectedDietaries && Object.keys(selectedDietaries).map(dietaryKey => {
              const dietaryCount = selectedDietaries[dietaryKey];
              return (
                <span>
                  {dietaryCount}x 
                  <span className="dietary">{dietaryKey}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}