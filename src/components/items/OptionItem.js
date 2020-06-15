import React from 'react';

export default function OptionItem({ name, dietaries }) {
  <li className="item">
    <h2>{name}</h2>
    <p>
      {dietaries.map(dietary => {
        return <span className="dietary">ve</span>
      })}
    </p>
  </li>
}