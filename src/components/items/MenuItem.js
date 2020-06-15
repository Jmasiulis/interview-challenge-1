import React from 'react';

export default function OptionItem({ name, dietaries, id, handleRemove }) {
  <li className="item">
    <h2>{name}</h2>
    <p>
    {dietaries.map(dietary => {
        return <span className="dietary">ve</span>
    })}
    </p>
    <button onClick={() => handleRemove(id)} className="remove-item">x</button>
  </li>
}