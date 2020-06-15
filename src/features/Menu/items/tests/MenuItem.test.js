import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from '../MenuItem';

describe('MenuItem', () => {
  const data = {
    name: 'Ravioli',
    onRemoveItem: () => {},
    dietaries: ['ve', 'ne', 'g'],
    id: 1
  }
  
  it('renders menu item with all it\'s dietaries', () => {
    const wrapper = shallow(<MenuItem {...data} />);
    expect(wrapper.find('.dietary')).toHaveLength(3);
    expect(wrapper.find('h2').text()).toEqual('Ravioli');
    expect(wrapper.find('.remove-item')).toHaveLength(1);
  });

  it('renders no dietaries if none exists', () => {
    const wrapper = shallow(<MenuItem {...data} dietaries={[]} />);
    expect(wrapper.find('.dietary')).toHaveLength(0);
    expect(wrapper.find('h2').text()).toEqual('Ravioli');
    expect(wrapper.find('.remove-item')).toHaveLength(1);
  });
})
