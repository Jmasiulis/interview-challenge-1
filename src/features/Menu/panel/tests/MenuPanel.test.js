import React from 'react';
import { shallow } from 'enzyme';
import MenuPanel from '../MenuPanel';

describe('MenuPanel', () => {
  const data = {
    items: {
      1: {
        name: 'Ravioli',
        dietaries: ['v', 'ne']
      },
      2: {
        name: 'Spaghetti',
        dietaries: ['v']
      }
    },
    onRemoveItem: () => {}
  }
  
  it('renders with two selected menu items', () => {
    const wrapper = shallow(<MenuPanel {...data} />);
    expect(wrapper.find('MenuItem')).toHaveLength(2);
  });
  
  it('does not render any menu items if none exists', () => {
    const wrapper = shallow(<MenuPanel {...data} items={{}} />);
    expect(wrapper.find('MenuItem')).toHaveLength(0);
  });
})
