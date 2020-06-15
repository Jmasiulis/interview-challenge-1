import React from 'react';
import { shallow } from 'enzyme';
import OptionItem from '../OptionItem';

describe('OptionItem', () => {
  const data = {
    name: 'Ravioli',
    onSelectItem: () => {},
    dietaries: ['ve', 'ne', 'g'],
    id: 1
  }
  
  it('renders menu item with all it\'s dietaries', () => {
    const wrapper = shallow(<OptionItem {...data} />);
    expect(wrapper.find('.dietary')).toHaveLength(3);
    expect(wrapper.find('h2').text()).toEqual('Ravioli');
    expect(wrapper.find('.option-button')).toHaveLength(1);
  });

  it('renders menu item with all it\'s dietaries', () => {
    const wrapper = shallow(<OptionItem {...data} dietaries={[]} />);
    expect(wrapper.find('.dietary')).toHaveLength(0);
    expect(wrapper.find('h2').text()).toEqual('Ravioli');
    expect(wrapper.find('.option-button')).toHaveLength(1);
  });
})
