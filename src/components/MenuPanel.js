import React from 'react';
import MenuItem from '../components/items/MenuItem';

export default function MenuOptionsPanel({ items, onRemoveItem }) {
  return <div className="col-8">
    <h2>Menu preview</h2>
    <ul className="menu-preview">
      {Object.keys(items).map(itemKey => {
          const item = items[itemKey];
          return (
            <MenuItem
              {...item}
              key={itemKey}
              onRemoveItem={onRemoveItem}
              id={itemKey}
            />
          )
        })}
    </ul>
  </div>
}