import React from 'react';
import { shallow } from 'enzyme';
import MenuLayout from '../MenuLayout';

describe('MenuLayout', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MenuLayout />);
    expect(wrapper.find('Header')).toHaveLength(1);
    expect(wrapper.find('MenuOptionsPanel')).toHaveLength(1);
    expect(wrapper.find('MenuPanel')).toHaveLength(1);
  });
})
