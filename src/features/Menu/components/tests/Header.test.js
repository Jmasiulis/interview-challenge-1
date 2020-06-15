import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
  const data = {
    itemsCount: 4,
    selectedDietaries: {
      ve: 1,
      ge: 3,
      ne: 2
    }
  };
  
  it('renders menu item with all it\'s dietaries', () => {
    const wrapper = shallow(<Header {...data} />);
    expect(wrapper.find('.dietary')).toHaveLength(3);
    expect(wrapper.find('span').at(0).text()).toEqual('4 items');
  });

  it('renders no dietaries if none exists', () => {
    const wrapper = shallow(<Header {...data} selectedDietaries={{}}/>);
    expect(wrapper.find('.dietary')).toHaveLength(0);
    expect(wrapper.find('span').at(0).text()).toEqual('4 items');
  });
})
