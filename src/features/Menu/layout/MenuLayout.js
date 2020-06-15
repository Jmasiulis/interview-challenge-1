import React from 'react';
import '../../../utils/App.css';
import MenuOptionsPanel from '../panel/MenuOptionsPanel';
import MenuPanel from '../panel/MenuPanel';
import items from '../../../utils/items';
import transformItems from '../../../utils/transformItems';
import Header from '../components/Header';

export default class MenuLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItemsCount: 0,
      selectedDietaries: {},
      selectedItems: {},
      availableItems: transformItems(items)
    };
  }

  handleItemSelect = ({ id, item }) => {
    const {[id]: omit, ...items} = this.state.availableItems;
    const dietaries = item.dietaries.reduce((agg, dietary) => {
      if (!agg[dietary]) {
        agg[dietary] = 0;
      }

      agg[dietary]++;

      return agg;
    }, this.state.selectedDietaries);


    this.setState({
      selectedItems: Object.assign(this.state.selectedItems, { [id]: item }),
      availableItems: items,
      selectedItemsCount: this.state.selectedItemsCount + 1,
      selectedDietaries: dietaries
    })
  }

  handleItemRemove = ({ id, item }) => {
    const {[id]: omit, ...items} = this.state.selectedItems;
    const dietaries = item.dietaries.reduce((agg, dietary) => {
      agg[dietary]--;

      if (agg[dietary] === 0) {
        delete agg[dietary];
      }

      return agg;
    }, this.state.selectedDietaries);

    this.setState({
      selectedItems: items,
      availableItems: Object.assign(this.state.availableItems, { [id]: item }),
      selectedItemsCount: this.state.selectedItemsCount - 1,
      selectedDietaries: dietaries
    })
  }

  render () {
    const { availableItems, selectedItems, selectedItemsCount, selectedDietaries } = this.state;

    return (
      <div className="wrapper">
        <Header 
          itemsCount={selectedItemsCount}
          selectedDietaries={selectedDietaries}
        />
        <div className="container menu-builder">
          <div className="row">
            <MenuOptionsPanel 
              items={availableItems}
              onSelectItem={this.handleItemSelect}
            />
            <MenuPanel
              items={selectedItems}
              onRemoveItem={this.handleItemRemove}/>
          </div>
        </div>
      </div>
    );
  } 
};
