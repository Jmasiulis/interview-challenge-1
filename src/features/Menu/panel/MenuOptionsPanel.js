import React from 'react';
import OptionItem from '../items/OptionItem';

export default function MenuOptionsPanel({ items, onSelectItem }) {
  return <div className="col-4">
    <ul className="item-picker">
      {Object.keys(items).map(itemKey => {
        const item = items[itemKey];
        return (
          <OptionItem
            {...item}
            key={itemKey}
            onSelectItem={onSelectItem}
            id={itemKey}
          />
        )
      })}
    </ul>
  </div>
}