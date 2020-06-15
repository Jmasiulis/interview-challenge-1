import React from 'react';

export default function OptionItem({ name, dietaries, id, onRemoveItem }) {
  return (
    <li className="item">
      <h2>{name}</h2>
      <p>
        {dietaries && dietaries.map(dietary => {
          return <span key={dietary} className="dietary">{dietary}</span>
        })}
      </p>
      <button onClick={() => onRemoveItem({ id, item: { name, dietaries }})} className="remove-item">x</button>
    </li>
  );
}