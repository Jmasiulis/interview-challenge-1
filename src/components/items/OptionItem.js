import React from 'react';

export default function OptionItem({ id, name, dietaries, onSelectItem }) {
  return (
    <li className="item">
      <button onClick={() => onSelectItem({ id, item: { name, dietaries }})} className="option-button">
        <h2>{name}</h2>
        <p>
          {dietaries && dietaries.map(dietary => {
            return <span key={dietary} className="dietary">{dietary}</span>
          })}
        </p>
      </button>
    </li>
  );
}